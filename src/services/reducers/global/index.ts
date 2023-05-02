import {RootState} from 'services/store';
import globalSlice from './slice';

const globalReducer = globalSlice.reducer;

const {setOpenApp, setLoadingApp, setToastApp, setModalApp, setLocaleApp} =
  globalSlice.actions;

const selectOpenApp = (state: RootState) => state.global.openApp;
const selectLoadingApp = (state: RootState) => state.global.loadingApp;
const selectToastApp = (state: RootState) => state.global.toastApp;
const selectModalApp = (state: RootState) => state.global.modalApp;
const selectLocaleApp = (state: RootState) => state.global.localeApp;

export {setOpenApp, setLoadingApp, setToastApp, setModalApp, setLocaleApp};
export {
  selectOpenApp,
  selectLoadingApp,
  selectToastApp,
  selectModalApp,
  selectLocaleApp,
};
export {default as globalMiddleware} from './middleware';
export {default as globalSagas} from './sagas';
export default {global: globalReducer};
