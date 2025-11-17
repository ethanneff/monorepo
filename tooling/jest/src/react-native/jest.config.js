module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$':
      '<rootDir>/../../tooling/jest/src/react-native/jest.files.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-gesture-handler|react-native-reanimated|react-native-screens|react-native-safe-area-context|react-native-mmkv|@react-native-community)/)',
    'jest-runner',
  ],
  setupFiles: [
    '<rootDir>/../../node_modules/jest-offline',
    '<rootDir>/../../tooling/jest/src/react-native/jest.setup.early.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/../../tooling/jest/src/react-native/jest.setup.js',
  ],
  coverageDirectory: '<rootDir>/.cache/jest',
  globals: {
    window: {},
  },
};
