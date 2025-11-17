import { type StyleProp, type ViewStyle } from 'react-native';
import { useStore } from '../../../store/src';
import { useTheme } from '../Theme/useTheme';
import { View } from '../View/View';

type CardProperties = {
  readonly children: React.ReactNode;
  readonly style?: StyleProp<ViewStyle>;
};

export const Card = ({ children, style }: CardProperties) => {
  const { borderRadius, colors, spacing } = useTheme();
  const theme = useStore((state) => state.application.theme);

  return (
    <View
      backgroundColor={colors.card}
      borderColor={colors.border}
      borderRadius={borderRadius.$12}
      borderWidth={1.5}
      hasDropShadow={theme === 'light'}
      overflow="hidden"
      padding={spacing.$12}
      style={style}
    >
      {children}
    </View>
  );
};
