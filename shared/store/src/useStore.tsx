import { merge } from 'lodash';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type StateCreator } from 'zustand/vanilla';
import { type Store } from './globals';
import { sliceApplication } from './slices/sliceApplication';
import { sliceAuth } from './slices/sliceAuth';
import { sliceSession } from './slices/sliceSession';
import { zustandStorage } from './storage';

const slices: StateCreator<Store> = (...api) => ({
  application: sliceApplication(...api),
  auth: sliceAuth(...api),
  session: sliceSession(...api),
});

export const useStore = create<Store>()(
  devtools(
    persist(immer(slices), {
      merge: (persisted, current) => merge({}, current, persisted),
      name: 'GlobalStore',
      partialize: (state) => ({
        application: state.application,
        auth: state.auth,
      }),
      storage: createJSONStorage(() => zustandStorage),
      version: 1,
    }),
  ),
);
