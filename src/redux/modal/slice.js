import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentAnnouncement: null,
  newAnnouncement: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setCurrentAnnouncement: (state, action) => {
      state.currentAnnouncement = action.payload;
      document.body.style.overflow = 'hidden';
    },

    setNewAnnoucement: (state, action) => {
      state.newAnnouncement = action.payload;
    },
    closeModal: state => {
      state.newAnnouncement = false;
      state.currentAnnouncement = null;
      document.body.style.overflow = 'unset';
    },
  },
});

export const modalReducer = slice.reducer;
export const { setCurrentAnnouncement, setNewAnnoucement, closeModal } =
  slice.actions;
