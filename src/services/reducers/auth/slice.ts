import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {
  AccessToken,
  AuthState,
  LoginRequest,
  ResponseUser,
  User,
} from './types';
import type {ResponseErrors} from '../global/type';
import {
  initResponseState,
  ResponseFailureAction,
  responsePending,
  responseReject,
  responseSuccess,
  ResponseSuccessAction,
} from 'helpers/handleReducer';

const initialState: AuthState = {
  login: initResponseState<User, ResponseErrors>(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ResponseUser | null | undefined>) {
      state.user = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string | null | undefined>) {
      state.accessToken = action.payload;
    },
    loginRequest(state, action: PayloadAction<LoginRequest>) {
      state.login = responsePending(state.login);
    },
    loginSuccess(state, action: ResponseSuccessAction<AccessToken>) {
      state.login = responseSuccess(state.login, action);
    },
    loginFailure(state, action: ResponseFailureAction<ResponseErrors>) {
      state.login = responseReject(state.login, action);
    },
  },
});

export default authSlice;
