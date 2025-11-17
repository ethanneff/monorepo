import { type StateCreator } from 'zustand';

export type Slice<State> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  State
>;
