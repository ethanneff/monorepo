import { type Slice } from '../types/slice';

export type SliceSession = State & { actions: Actions };

type State = {
  openAt: number;
};

const initialState: State = {
  openAt: 0,
};

type Actions = {
  setOpenAt: (openAt: State['openAt']) => void;
};

export const sliceSession: Slice<SliceSession> = (set): SliceSession => ({
  ...initialState,
  actions: {
    setOpenAt: (openAt) => {
      set((state) => {
        state.session.openAt = openAt;
      });
    },
  },
});
