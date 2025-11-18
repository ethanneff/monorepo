export const isReactNative =
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

export const isTest =
  typeof process !== 'undefined' &&
  (process.env.JEST_WORKER_ID !== undefined || process.env.NODE_ENV === 'test');

export const isServer =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison
  (globalThis.window === undefined || typeof document === 'undefined') &&
  !isReactNative &&
  !isTest;

export const isWeb =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison
  globalThis.window !== undefined && !isReactNative && !isTest;
