import { useAppTheme } from './useAppTheme';

export const useDropShadow = (show?: boolean) => {
  const { colors } = useAppTheme();
  if (!show) return {};
  return {
    elevation: 2,
    shadowColor: colors.background,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  };
};
