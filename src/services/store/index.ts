import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import rootMiddleware, {sagaMiddleware} from './rootMiddleware';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import rootSaga from './rootSaga';

//get post put delete
//set remove get

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: true}).concat(...rootMiddleware),
});

sagaMiddleware.run(rootSaga);

const {dispatch} = store;

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type {AppDispatch, RootState};
export {store, useAppDispatch, useAppSelector, dispatch};
