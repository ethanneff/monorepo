import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedViewProperties = ViewProps & {
  readonly darkColor?: string;
  readonly lightColor?: string;
};

export const ThemedView = ({
  darkColor,
  lightColor,
  style,
  ...otherProperties
}: ThemedViewProperties) => {
  const backgroundColor = useThemeColor(
    { dark: darkColor, light: lightColor },
    'background',
  );

  return (
    <View
      style={[{ backgroundColor }, style]}
      {...otherProperties}
    />
  );
};
