import { createSlice } from '@reduxjs/toolkit';
import {
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
    username: null,
    type: null,
    email: null,
    announcements: null,
  },
  token: null,
  isLoggedIn: true,
  //!___________________________________________FALSE_____________________________________________________________________________________________________________________________________________
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, () => {
        toast.error('This name or email is already in use', toastStyles);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, () => {
        toast.error('Invalid email or password', toastStyles);
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        //!___________________________________________FALSE_____________________________________________________________________________________________________________________________________________
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
      .addCase(getAnnouncementThunk.fulfilled, (state, action) => {
        state.user.balance = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
export const { register, login, logout } = slice.actions;
