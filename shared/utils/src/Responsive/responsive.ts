import { Dimensions } from 'react-native';
import { type Base4, smallestDimension } from './types';

export const responsive = (size: Base4, factor = 0.25) => {
  const { height, width } = Dimensions.get('window');
  const smallest = Math.min(width, height);
  const diff = smallest / smallestDimension;
  const scaledFactor = 1 + (diff - 1) * factor;

  return scaledFactor * size;
};
