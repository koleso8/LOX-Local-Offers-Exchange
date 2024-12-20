import { createSlice } from '@reduxjs/toolkit';
import {
  addAnnouncementThunk,
  getAnnouncementThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

const initialState = {
  user: {
    name: null,
    type: null,
    email: null,
    announcements: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(action.payload);

        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, () => {
        toast.error('Ця пошта вже використовується !', toastStyles);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        toast.error('Невірний емейл або пароль', toastStyles);
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
        // errorMessage('Please login or register');
      })
      .addCase(addAnnouncementThunk.fulfilled, (state, action) => {
        state.user.announcements.push(action.payload);
      })
      .addCase(addAnnouncementThunk.rejected, (state, action) => {
        state.user.announcements.push(action.payload);
      })
      .addCase(getAnnouncementThunk.fulfilled, (state, action) => {
        state.user.balance = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
export const { register, login, logout } = slice.actions;
