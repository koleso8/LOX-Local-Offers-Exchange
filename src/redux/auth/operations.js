import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

export const lox = axios.create({
  baseURL: 'https://lox-19k0.onrender.com',
});

const setAuthHeader = token => {
  lox.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  lox.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const { data } = await lox.post('/auth/register', userData);
      setAuthHeader(data.data.token);
      toast.success('Registration successful!', toastStyles);
      return data.data;
    } catch (error) {
      toast.error('Failed to register!', toastStyles);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await lox.post('/auth/login', userData);
      setAuthHeader(data.token);
      toast.success('Login successful!', toastStyles);
      return data;
    } catch (error) {
      toast.error('Failed to login!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await lox.post('auth/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  'auth/reset-password',
  async (email, thunkAPI) => {}
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue('NO USER');
    }
    try {
      setAuthHeader(persistToken);

      const { data } = await lox.post('auth/refresh');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addAnnouncementThunk = createAsyncThunk(
  'auth/addAnnouncement',
  async (announcement, thunkAPI) => {
    try {
      const { data } = await lox.post('/announcements', announcement);
      toast.success('Announcements added!', toastStyles);
      return data;
    } catch (error) {
      toast.error('announcements was not added!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAnnouncementThunk = createAsyncThunk(
  'auth/getAnnouncement',
  async (_, thunkAPI) => {
    try {
      const { data } = await lox.get('/announcements/:announcementId');
      return data.announcements;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
