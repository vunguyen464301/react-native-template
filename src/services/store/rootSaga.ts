import {all} from 'redux-saga/effects';
import authSagas from 'services/reducers/auth/sagas';
import {globalSagas} from 'services/reducers/global';

function* rootSaga() {
  yield all([...authSagas, ...globalSagas]);
}

export default rootSaga;
