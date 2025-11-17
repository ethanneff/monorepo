import { useTheme } from './useTheme';

export const useDropShadow = (show?: boolean) => {
  const { colors } = useTheme();
  if (!show) return {};
  return {
    elevation: 2,
    shadowColor: colors.background,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  };
};
