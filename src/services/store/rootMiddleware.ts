import {type Middleware} from '@reduxjs/toolkit';
import {authMiddleware} from 'services/reducers/auth';
import createSagaMiddleware from 'redux-saga';
import {globalMiddleware} from 'services/reducers/global';

const sagaMiddleware = createSagaMiddleware({
  onError: (e: any) => {
    console.log('error', e);
    // logError(e);
    // store.dispatch({ type: 'ERROR', payload: e });
    // store.dispatch(showLoader(false));
  },
});

const middleware: Middleware[] = [
  sagaMiddleware,
  ...authMiddleware,
  ...globalMiddleware,
];

export {sagaMiddleware};

export default middleware;
