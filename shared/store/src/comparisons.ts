import { isEqual as equal } from 'lodash';

export const isLengthEqual = (a: unknown[], b: unknown[]) =>
  a.length === b.length;
export const isEqual = (a: unknown, b: unknown) => Object.is(a, b);
export const isDeepEqual = (a: unknown, b: unknown) => equal(a, b);
export { shallow as isShallow } from 'zustand/shallow';
