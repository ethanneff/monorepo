import { createSelector } from 'reselect';

export const getUser = createSelector(
  (state: Store) => state.auth,
  (auth) => auth.user,
);
