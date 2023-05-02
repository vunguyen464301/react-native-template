import {getAccessTokenStorage, getLocaleStorage} from 'services/localStorage';
import {RootState} from 'services/store';
import {Middleware} from '@reduxjs/toolkit';
import {setLocaleApp, setOpenApp} from '.';
import {setAccessToken} from '../auth';

const globalMiddleware: Middleware<unknown, RootState> =
  store => next => async action => {
    if (setOpenApp.match(action)) {
      const openApp = action.payload;

      if (openApp) {
        const accessToken = await getAccessTokenStorage();
        const locale = await getLocaleStorage();
        console.log('locale', locale);
        if (accessToken) {
          store.dispatch(setAccessToken(accessToken));
        }
        if (locale) {
          store.dispatch(setLocaleApp(locale));
        }
      }
    }

    return next(action);
  };

export default [globalMiddleware];
