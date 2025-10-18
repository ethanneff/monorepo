import { isServer } from '../Environment/isServer';
import { type Base4, smallestDimension } from './types';

export const spacing = (size: Base4, factor = 0.25) => {
  const width = isServer ? 1920 : window.innerWidth;
  const height = isServer ? 1080 : window.innerHeight;
  const smallest = Math.min(width, height);
  const diff = smallest / smallestDimension;
  const scaledFactor = 1 + (diff - 1) * factor;

  return scaledFactor * size;
};
