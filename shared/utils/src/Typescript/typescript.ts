export const assertNever = (value: never) => {
  throw new Error(`Unexpected value: ${value}`);
};

export const typedEntries = <T extends Record<string, unknown>>(object: T) => {
  return Object.entries(object) as [keyof T, T[keyof T]][];
};

export const typedKeys = <T extends Record<string, unknown>>(object: T) => {
  return Object.keys(object) as (keyof T)[];
};

export const typedValues = <T extends Record<string, unknown>>(object: T) => {
  return Object.values(object) as T[keyof T][];
};
