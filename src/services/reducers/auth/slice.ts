import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, ResponseUser } from './types';

const initialState: AuthState = {};

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
  },
});

export default authSlice;
