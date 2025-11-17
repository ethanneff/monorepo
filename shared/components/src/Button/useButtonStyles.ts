import { assertNever, type ColorName, useTheme } from '@shared/utils';
import { type ButtonVariant } from '../Button/types';

type ButtonStyles = {
  backgroundColor: string;
  borderColor: string;
  color: ColorName;
};

export const useButtonStyles = (variant: ButtonVariant): ButtonStyles => {
  const { colors } = useTheme();

  switch (variant) {
    case 'destructive': {
      return {
        backgroundColor: colors.destructive,
        borderColor: colors.destructive,
        color: 'primaryForeground',
      };
    }
    case 'ghost':
    case 'link': {
      return {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'foreground',
      };
    }
    case 'outline': {
      return {
        backgroundColor: colors.transparent,
        borderColor: colors.border,
        color: 'foreground',
      };
    }
    case 'primary': {
      return {
        backgroundColor: colors.primary,
        borderColor: colors.accent,
        color: 'primaryForeground',
      };
    }
    case 'secondary': {
      return {
        backgroundColor: colors.background,
        borderColor: colors.background,
        color: 'foreground',
      };
    }
    default: {
      return assertNever(variant);
    }
  }
};
