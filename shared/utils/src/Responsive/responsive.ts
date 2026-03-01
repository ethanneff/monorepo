import { Dimensions } from 'react-native';
import { isServer, isWeb } from '../Environment/environment';

const baseSize = 375;
const maxScaleFactor = 2;

export const responsive = (value: number): number => {
  // On server and web, return unscaled value so SSR and client hydration match.
  if (isServer || isWeb) {
    return value;
  }
  const { height, width } = Dimensions.get('window');
  const smallestDimension = Math.min(height, width);
  const scale = Math.min(smallestDimension / baseSize, maxScaleFactor);
  return value * scale;
};
