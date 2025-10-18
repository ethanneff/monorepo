import { isReactNative } from './isReactNative';
import { isTest } from './isTest';

export const isServer =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison
  (globalThis.window === undefined || typeof document === 'undefined') &&
  !isReactNative &&
  !isTest;
