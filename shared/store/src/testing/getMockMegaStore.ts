import { jest } from '@jest/globals';
import { type MegaStore } from '../globals';

export const getMockMegaStore = () => {
  const store: MegaStore = {
    application: {
      actions: {
        incrementAppOpenCount: jest.fn(),
        setTheme: jest.fn(),
      },
      appOpenCount: 0,
      theme: 'light',
    },
    auth: {
      actions: {
        login: jest.fn(),
        logout: jest.fn(),
      },
      user: null,
    },
    session: {
      actions: {
        setOpenAt: jest.fn(),
      },
      openAt: 0,
    },
  };

  const set = (callback: (store: MegaStore) => void) => {
    callback(store);
  };

  const get = () => store;

  const api = {
    getInitialState: get,
    getState: get,
    setState: () => false,
    subscribe: () => {
      return () => false;
    },
  };

  return { api, get, set, store };
};
