export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectUserName = state => state.auth.user.username;
export const selectUserTel = state => state.auth.user.tel;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserAnnouncements = state => state.auth.user.announcements;

export const selectTypeOfUser = state => state.auth.user.type;
