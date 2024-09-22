export const selectAnnouncements = state => state.announcements.items;

export const selectCurrentAnnouncement = state =>
  state.announcements.currentAnnouncement;

export const selectIsLoading = state => state.announcements.loading;
export const selectError = state => state.announcements.error;
