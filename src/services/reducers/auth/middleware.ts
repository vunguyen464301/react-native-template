import {
  getAccessTokenStorage,
  removeAccessTokenStorage,
  setAccessTokenStorage,
} from 'services/localStorage';
import {type RootState} from 'services/store';
import {type Middleware} from '@reduxjs/toolkit';
import {setAccessToken, setUser} from '.';

const authMiddleware: Middleware<unknown, RootState> =
  store => next => async action => {
    // if (setAccessToken.match(action)) {
    //   const accessToken = action.payload;

    //   const accessTokenStorage = getAccessTokenStorage();

    //   //avoid save user many times was duplicate
    //   if (accessToken !== accessTokenStorage && accessToken) {
    //     setAccessTokenStorage(accessToken);
    //   } else if (!accessToken) {
    //     removeAccessTokenStorage();
    //     store.dispatch(setUser(null));
    //   }
    // }

    return next(action);
  };
export default [authMiddleware];
