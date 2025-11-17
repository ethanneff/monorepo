import { useTheme } from '../Theme/useTheme';
import { View } from '../View/View';

export const Divider = () => {
  const { colors } = useTheme();
  return (
    <View
      backgroundColor={colors.border}
      flex={1}
      height={1}
    />
  );
};
