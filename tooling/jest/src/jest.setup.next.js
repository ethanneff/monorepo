// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Set Jest timeout to prevent hanging
jest.setTimeout(5000);

// Global cleanup to prevent Jest from hanging due to timers
afterEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});
