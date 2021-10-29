import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

export const selectAuthenticated = createSelector(
  selectAuth,
  (auth) => auth.isAuthenticated
);
export const selectAuthUser = createSelector(selectAuth, (auth) => auth.user);
