import { type Slice } from '../types/slice';

export type SliceAuth = State & { actions: Actions };

type Actions = {
  login: (data: State['user']) => void;
  logout: () => void;
};

type State = {
  user: null | {
    email: string;
    id: string;
    name: string;
    token: string;
  };
};

const initialState: State = {
  user: null,
};

export const sliceAuth: Slice<SliceAuth> = (set): SliceAuth => ({
  ...initialState,
  actions: {
    login: (user) => {
      set((state) => {
        state.auth.user = user;
      });
    },
    logout: () => {
      set((state) => {
        state.auth.user = null;
      });
    },
  },
});
