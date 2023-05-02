import {type RootState} from 'services/store';
import authSlice from './slice';

const authReducer = authSlice.reducer;

const {setUser, setAccessToken} = authSlice.actions;

const selectUser = (state: RootState) => state.auth.user;
const selectAccessToken = (state: RootState) => state.auth.accessToken;

export {setUser, setAccessToken, selectUser, selectAccessToken};

export {default as authMiddleware} from './middleware';
export {default as authSagas} from './sagas';

export default {
  auth: authReducer,
};
