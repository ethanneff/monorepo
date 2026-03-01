'use client';

import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useTheme } from '../Theme/useTheme';
import { Touchable } from '../Touchable/Touchable';
import { View } from '../View/View';

type Properties = {
  readonly accessibilityLabel: string;
  readonly checked: boolean;
  readonly onPress: () => void;
  readonly size?: number;
};

const DURATION_MS = 200;

export const Toggle = ({
  accessibilityLabel,
  checked,
  onPress,
  size = 16,
}: Properties) => {
  const { colors, spacing } = useTheme();
  const translateX = useRef(new Animated.Value(checked ? size : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      duration: DURATION_MS,
      toValue: checked ? size : 0,
      useNativeDriver: false,
    }).start();
  }, [checked, size, translateX]);

  return (
    <Touchable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="switch"
      accessibilityState={{ checked }}
      onPress={onPress}
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
          style={{
            transform: [{ translateX }],
          }}
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
