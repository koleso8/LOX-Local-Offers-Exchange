import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addAnnouncementThunk,
  deleteAnnouncementThunk,
  fetchAllAnnouncementsThunk,
  editAnnouncementThunk,
} from './operations';

const initialState = {
  items: [],

  loading: false,
  error: null,
  currentAnnouncement: null,
};

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,

  reducers: {
    addCurrentAnnouncement(state, { payload }) {
      state.currentAnnouncement = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllAnnouncementsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(editAnnouncementThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.map(ann =>
          ann.id === payload.id ? payload : ann
        );
      })
      .addCase(addAnnouncementThunk.fulfilled, (state, { payload }) => {
        const { items } = state;
        state.items = [...items, payload];
      })
      .addCase(deleteAnnouncementThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(ann => ann.id !== payload);
      })
      .addMatcher(
        isAnyOf(
          fetchAllAnnouncementsThunk.pending,
          addAnnouncementThunk.pending,
          deleteAnnouncementThunk.pending
        ),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllAnnouncementsThunk.fulfilled,
          addAnnouncementThunk.fulfilled,
          deleteAnnouncementThunk.fulfilled
        ),
        state => {
          state.loading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllAnnouncementsThunk.rejected,
          addAnnouncementThunk.rejected,
          deleteAnnouncementThunk.rejected
        ),
        state => {
          state.loading = false;
          state.error = true;
        }
      );
  },
});

export const announcementsReducer = announcementsSlice.reducer;
export const { addCurrentAnnouncement } = announcementsSlice.actions;
