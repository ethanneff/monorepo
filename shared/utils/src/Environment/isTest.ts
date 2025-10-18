/**
 * Checks if the current environment is a test environment.
 */
export const isTest =
  typeof process !== 'undefined' &&
  (process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === 'test');
