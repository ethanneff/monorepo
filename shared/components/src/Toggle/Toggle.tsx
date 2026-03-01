import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from '../Theme/useTheme';
import { Touchable } from '../Touchable/Touchable';
import { View } from '../View/View';

type Properties = {
  /** Accessible name for the switch (e.g. "Dark mode"). Required for screen reader users. */
  readonly accessibilityLabel?: string;
  readonly checked: boolean;
  readonly onPress: () => void;
  readonly size?: number;
};

export const Toggle = ({
  accessibilityLabel,
  checked,
  onPress,
  size = 16,
}: Properties) => {
  const { colors, spacing } = useTheme();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(checked ? size : 0, { duration: 200 }) },
      ],
    };
  });

  return (
    <Touchable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked }}
      onPressIn={onPress}
      withoutFeedback
    >
      <View
        alignItems="center"
        backgroundColor={checked ? colors.foreground : colors.border}
        borderRadius={size}
        flexDirection="row"
        padding={spacing.$2}
      >
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={animatedStyle}
        >
          <View
            backgroundColor={colors.primaryForeground}
            borderRadius={size}
            height={size}
            width={size}
          />
        </Animated.View>
        <View
          borderRadius={size}
          height={size}
          opacity={0}
          width={size}
        />
      </View>
    </Touchable>
  );
};
