import type { StateStorage } from 'zustand/middleware';
import { isServer } from '@shared/utils';

const KEY_PREFIX = 'zustand-mmkv-web';

export const zustandStorage: StateStorage = {
  getItem: (name: string): null | string => {
    if (isServer) return null;
    try {
      return globalThis.localStorage.getItem(`${KEY_PREFIX}-${name}`) ?? null;
    } catch {
      return null;
    }
  },
  removeItem: (name: string): void => {
    if (isServer) return;
    try {
      globalThis.localStorage.removeItem(`${KEY_PREFIX}-${name}`);
    } catch {
      // ignore
    }
  },
  setItem: (name: string, value: string): void => {
    if (isServer) return;
    try {
      globalThis.localStorage.setItem(`${KEY_PREFIX}-${name}`, value);
    } catch {
      // ignore
    }
  },
};
