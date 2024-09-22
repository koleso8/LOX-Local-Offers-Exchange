import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { toastStyles } from '../../helpers/toastStyles';

import { lox } from '../auth/operations';

export const fetchAllAnnouncementsThunk = createAsyncThunk(
  'announcements/fetchAllAnnouncements',
  async (_, thunkAPI) => {
    try {
      const { data } = await lox.get('__________________________');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editAnnouncementThunk = createAsyncThunk(
  'announcements/editAnnouncement',
  async (announcement, thunkAPI) => {
    try {
      const { id, announcementDate, type, title, comment, author, price } =
        announcement;
      const { data } = await lox.patch(`______________________${id}`, {
        announcementDate,
        type,
        title,
        comment,
        author,
        price,
      });
      toast.success('transaction was modified!', toastStyles);
      return data;
    } catch (error) {
      toast.error('the transaction was not modified!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteAnnouncementThunk = createAsyncThunk(
  'announcements/deleteAnnouncement',
  async (announcementId, thunkAPI) => {
    try {
      await lox.delete(`______________________/${announcementId}`);
      toast.success('transaction was deleted!', toastStyles);
      return announcementId;
    } catch (error) {
      toast.error('the transaction was not deleted!', toastStyles);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
