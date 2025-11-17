import { type StateCreator } from 'zustand';
import { type Store } from '../globals';

export type Slice<State> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  State
>;
