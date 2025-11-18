import type { StateStorage } from 'zustand/middleware';
import { Platform } from 'react-native';
import { createMMKV } from 'react-native-mmkv';

// TODO: need environment prod|staging|dev
const id = `zustand-mmkv-${Platform.OS}`;
const config = { encryptionKey: `${id}-encryption-key`, id };

const storage = createMMKV(config);

export const zustandStorage: StateStorage = {
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
