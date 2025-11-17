import { createSelector } from 'reselect';
import { type Store } from '../globals';

export const getUser = createSelector(
  (state: Store) => state.auth,
  (auth) => auth.user,
);
