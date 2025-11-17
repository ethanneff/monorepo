// This file runs BEFORE the test framework is installed in the environment
// Use this for critical mocks that need to be in place before any module loading

// Mock react-native-mmkv before it's loaded
jest.mock('react-native-mmkv', () => ({
  createMMKV: jest.fn(() => ({
    getString: jest.fn(),
    set: jest.fn(),
    remove: jest.fn(),
    delete: jest.fn(),
    getNumber: jest.fn(),
    getBoolean: jest.fn(),
    contains: jest.fn(),
    clearAll: jest.fn(),
    getAllKeys: jest.fn(),
  })),
  MMKV: jest.fn(),
  useMMKVString: jest.fn(),
  useMMKVNumber: jest.fn(),
  useMMKVBoolean: jest.fn(),
  useMMKVObject: jest.fn(),
}));
