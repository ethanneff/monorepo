import { type Slice } from '../types/slice';

export type SliceApplication = State & { actions: Actions };

type State = {
  appOpenCount: number;
  theme: Theme;
};

type Theme = 'dark' | 'light';

const initialState: State = {
  appOpenCount: 0,
  theme: 'light',
};

type Actions = {
  incrementAppOpenCount: () => void;
  setTheme: (theme: State['theme']) => void;
  toggleTheme: () => void;
};

export const sliceApplication: Slice<SliceApplication> = (
  set,
): SliceApplication => ({
  ...initialState,
  actions: {
    incrementAppOpenCount: () => {
      set((state) => {
        state.application.appOpenCount += 1;
      });
    },
    setTheme: (theme) => {
      set((state) => {
        state.application.theme = theme;
      });
    },
    toggleTheme: () => {
      set((state) => {
        state.application.theme =
          state.application.theme === 'dark' ? 'light' : 'dark';
      });
    },
  },
});
