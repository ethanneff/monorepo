/* eslint-disable new-cap */
import { useCallback } from 'react';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useTheme } from '../Theme/useTheme';
import { View } from '../View/View';

const { width } = Dimensions.get('window');
const SLIDER_WIDTH = width - 40;
const KNOB_SIZE = 30;

type SliderProperties = {
  readonly max: number;
  readonly min: number;
  readonly onChange: (value: number) => void;
  readonly step: number;
  readonly value: number;
};

export const Slider = ({
  max = 1,
  min = 0,
  onChange,
  step = 1,
  value,
}: SliderProperties) => {
  const { colors, spacing } = useTheme();
  const translateX = useSharedValue(
    ((value - min) / (max - min)) * (SLIDER_WIDTH - KNOB_SIZE),
  );
  const context = useSharedValue(0);

  const onGestureEnd = useCallback(
    (value_: number) => {
      onChange(value_);
    },
    [onChange],
  );

  const pan = Gesture.Pan()
    .onBegin(() => {
      context.value = translateX.value;
    })
    .onUpdate((event) => {
      translateX.value = Math.min(
        Math.max(0, context.value + event.translationX),
        SLIDER_WIDTH - KNOB_SIZE,
      );
    })
    .onEnd(() => {
      const percent = translateX.value / (SLIDER_WIDTH - KNOB_SIZE);
      let newValue = min + percent * (max - min);
      newValue = Math.round(newValue / step) * step;
      onGestureEnd(newValue);
    });

  const tap = Gesture.Tap().onEnd((event) => {
    const newX = Math.min(
      Math.max(0, event.x - KNOB_SIZE / 2),
      SLIDER_WIDTH - KNOB_SIZE,
    );
    translateX.value = withSpring(newX);
    const percent = newX / (SLIDER_WIDTH - KNOB_SIZE);
    let newValue = min + percent * (max - min);
    newValue = Math.round(newValue / step) * step;
    onGestureEnd(newValue);
  });

  const composed = Gesture.Race(pan, tap);

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      alignItems="center"
      justifyContent="center"
      padding={spacing.$20}
    >
      <GestureDetector gesture={composed}>
        <Animated.View
          style={{
            backgroundColor: colors.primaryForeground,
            borderRadius: KNOB_SIZE / 2,
            height: KNOB_SIZE,
            justifyContent: 'center',
            width: SLIDER_WIDTH,
          }}
        >
          <Animated.View
            style={[
              {
                backgroundColor: colors.primaryForeground,
                borderColor: colors.primary,
                borderRadius: KNOB_SIZE / 2,
                borderWidth: 2,
                height: KNOB_SIZE,
                position: 'absolute',
                width: KNOB_SIZE,
              },
              knobStyle,
            ]}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

/* eslint-enable new-cap */
