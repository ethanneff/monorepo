export const isReactNative =
  typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

type ProcessWithEnvironment = { env?: Record<string, string | undefined> };

const processEnvironment = (
  globalThis as typeof globalThis & { process?: ProcessWithEnvironment }
).process?.env;

export const isTest =
  processEnvironment !== undefined &&
  (processEnvironment.JEST_WORKER_ID !== undefined ||
    processEnvironment.NODE_ENV === 'test');

export const isServer =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison
  (globalThis.window === undefined || typeof document === 'undefined') &&
  !isReactNative &&
  !isTest;

export const isWeb =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison
  globalThis.window !== undefined && !isReactNative && !isTest;
