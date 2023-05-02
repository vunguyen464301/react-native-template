import {type Middleware} from '@reduxjs/toolkit';
import {authMiddleware} from 'services/reducers/auth';
import createSagaMiddleware from 'redux-saga';
import {store} from '.';
import rootSaga from './rootSaga';
import {globalMiddleware} from 'services/reducers/global';

const sagaMiddleware = createSagaMiddleware({
  onError: (e: any) => {
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
// sagaMiddleware.run(rootSaga);

export {sagaMiddleware};

export default middleware;
