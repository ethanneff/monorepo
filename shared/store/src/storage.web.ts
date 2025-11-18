import type { StateStorage } from 'zustand/middleware';

// Web implementation using localStorage
export const zustandStorage: StateStorage = {
  getItem: (name) => {
    const value = localStorage.getItem(name);
    return value ?? null;
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, value);
  },
};
