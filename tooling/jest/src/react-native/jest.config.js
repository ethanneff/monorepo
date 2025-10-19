module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$':
      '<rootDir>/../../tooling/jest/src/jest.files.js',
  },
  transformIgnorePatterns: ['node_modules/(?!react-native)/', 'jest-runner'],
  setupFilesAfterEnv: [
    '<rootDir>/../../tooling/jest/src/react-native/jest.setup.js',
  ],
  setupFiles: ['<rootDir>/../../node_modules/jest-offline'],
  coverageDirectory: '<rootDir>/.cache/jest',
  globals: {
    window: {},
  },
};
