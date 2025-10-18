export const isReactNative =
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
