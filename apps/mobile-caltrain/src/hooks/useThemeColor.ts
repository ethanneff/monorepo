/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export const useThemeColor = (
  properties: { dark?: string; light?: string },
  colorName: keyof typeof Colors.dark,
) => {
  const theme = useColorScheme() ?? 'light';
  const colorFromProperties = properties[theme];

  if (colorFromProperties) {
    return colorFromProperties;
  }
  return Colors[theme][colorName];
};
