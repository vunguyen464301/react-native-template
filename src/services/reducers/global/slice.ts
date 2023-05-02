import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { GlobalState, LocaleType, ModalType, ToastType } from './type';

const initialState: GlobalState = {
  openApp: false,
  loadingApp: false,
  toastApp: { visible: false, messages: '', type: undefined },
  modalApp: { visible: false },
  localeApp: 'en-US',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setOpenApp(state, action: PayloadAction<boolean>) {
      state.openApp = action.payload;
    },
    setLoadingApp(state, action: PayloadAction<boolean>) {
      state.loadingApp = action.payload;
    },
    setToastApp(state, action: PayloadAction<ToastType>) {
      state.toastApp = action.payload;
    },
    setModalApp(state, action: PayloadAction<ModalType>) {
      state.modalApp = action.payload;
    },
    setLocaleApp(state, action: PayloadAction<LocaleType>) {
      state.localeApp = action.payload;
    },
  },
});

export default globalSlice;
