import { useStore } from '@shared/store';
import { borderRadius, colors, spacing } from '@shared/utils';

export const useTheme = () => {
  const { theme } = useStore((state) => state.application);

  return {
    borderRadius,
    colors: colors[theme],
    spacing,
    theme,
  };
};
