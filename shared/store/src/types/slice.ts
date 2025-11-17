import { type StateCreator } from 'zustand';

export type Slice<State> = StateCreator<
  MegaStore,
  [['zustand/immer', never]],
  [],
  State
>;
