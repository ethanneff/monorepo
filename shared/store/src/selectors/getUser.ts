import { createSelector } from 'reselect';

export const getUser = createSelector(
  (state: MegaStore) => state.auth,
  (auth) => auth.user,
);
