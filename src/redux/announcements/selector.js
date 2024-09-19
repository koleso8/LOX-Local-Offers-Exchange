export const selectAnnouncements = state => state.announcement.items;

export const selectCurrentAnnouncement = state =>
  state.announcements.currentAnnouncement;

export const selectIsLoading = state => state.transactions.loading;
export const selectError = state => state.transactions.error;
