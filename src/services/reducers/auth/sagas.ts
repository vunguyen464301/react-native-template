import {call, put, takeLeading} from 'redux-saga/effects';
import {loginFailure, loginRequest, loginSuccess} from '.';
import api from 'services/api';
import {User} from './types';

function* signInAccount(action: ReturnType<typeof loginRequest>) {
  try {
    const {payload} = action;
    const res: User = yield call(() => {
      return api.post({path: '/auth/login', data: payload});
    });
    yield put({type: loginSuccess.type, payload: res});
  } catch (err) {
    yield put({type: loginFailure.type, payload: err});
  } finally {
  }
}

const authSagas = [takeLeading(loginRequest.type, signInAccount)];

export default authSagas;
