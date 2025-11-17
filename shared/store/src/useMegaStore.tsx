import { merge } from 'lodash';
import { Platform } from 'react-native';
import { createMMKV } from 'react-native-mmkv';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
  type StateStorage,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { type StateCreator } from 'zustand/vanilla';
import { sliceApplication } from './slices/sliceApplication';
import { sliceAuth } from './slices/sliceAuth';
import { sliceSession } from './slices/sliceSession';

const slices: StateCreator<MegaStore> = (...api) => ({
  application: sliceApplication(...api),
  auth: sliceAuth(...api),
  session: sliceSession(...api),
});

const storage = createMMKV({
  encryptionKey: 'zustand-mmvk-encryption-key',
  // TODO: need environment prod|staging|dev
  id: `zustand-mmvk-${Platform.OS}`,
});

const zustandStorage: StateStorage = {
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.remove(name);
  },
  setItem: (name, value) => {
    storage.set(name, value);
  },
};

export const useMegaStore = create<MegaStore>()(
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
