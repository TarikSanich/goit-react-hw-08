export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const error = state => state.auth.error;

export const loading = state => state.auth.loading;

export const selectIsRefreshing = state => state.auth.isRefreshing;
