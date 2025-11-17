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
  readonly checked: boolean;
  readonly onPress: () => void;
  readonly size?: number;
};

export const Toggle = ({ checked, onPress, size = 16 }: Properties) => {
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
