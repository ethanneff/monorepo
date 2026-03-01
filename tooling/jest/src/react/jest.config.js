const nextJest = require('next/jest');

/**
 * Creates a Jest configuration for Next.js apps
 * @param {string} appDir - The directory of the Next.js app (e.g., './')
 * @param {object} customConfig - Additional Jest configuration to merge
 * @returns {function} Jest config creator function
 */
function createNextJestConfig(appDir, customConfig = {}) {
  const createJestConfig = nextJest({
    dir: appDir,
  });

  const defaultConfig = {
    cacheDirectory: '<rootDir>/.cache/jest',
    setupFilesAfterEnv: [
      '<rootDir>/../../tooling/jest/src/react/jest.setup.js',
    ],
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: [
      'web.js',
      'web.jsx',
      'web.ts',
      'web.tsx',
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'node',
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^react-native$': 'react-native-web',
      ...customConfig.moduleNameMapper,
    },
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.stories.{js,jsx,ts,tsx}',
      '!src/**/__tests__/**',
      ...(customConfig.collectCoverageFrom || []),
    ],
    coverageDirectory: '<rootDir>/coverage',
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    ...customConfig,
  };

  return createJestConfig(defaultConfig);
}

module.exports = createNextJestConfig;
