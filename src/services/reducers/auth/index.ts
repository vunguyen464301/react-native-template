import {type RootState} from 'services/store';
import authSlice from './slice';

const authReducer = authSlice.reducer;

const {setUser, setAccessToken} = authSlice.actions;

const selectUser = (state: RootState) => state.auth.user;
const selectAccessToken = (state: RootState) => state.auth.accessToken;
const selectLogin = (state: RootState) => state.auth.login;

export const {loginRequest, loginSuccess, loginFailure} = authSlice.actions;

export {setUser, setAccessToken, selectUser, selectAccessToken, selectLogin};

export {default as authMiddleware} from './middleware';

export default {
  auth: authReducer,
};
