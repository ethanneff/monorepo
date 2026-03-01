'use client';

import { DefaultTheme, type Theme } from '@react-navigation/native';
import { useStore } from '@shared/store/src/useStore';
import { colors } from '@shared/utils';

export const useNavigationTheme = (): Theme => {
  const theme = useStore((state) => state.application.theme);
  const { background, border, card, foreground, primary } = colors[theme];
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background,
      border,
      card,
      notification: primary,
      primary,
      text: foreground,
    },
    dark: theme === 'dark',
  };
};
