import type { StateStorage } from 'zustand/middleware';

const KEY_PREFIX = 'zustand-mmkv-web';

export const zustandStorage: StateStorage = {
  getItem: (name: string): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return window.localStorage.getItem(`${KEY_PREFIX}-${name}`) ?? null;
    } catch {
      return null;
    }
  },
  removeItem: (name: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.removeItem(`${KEY_PREFIX}-${name}`);
    } catch {
      // ignore
    }
  },
  setItem: (name: string, value: string): void => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(`${KEY_PREFIX}-${name}`, value);
    } catch {
      // ignore
    }
  },
};
