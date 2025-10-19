import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export const BlurTabBarBackground = () => {
  return (
    <BlurView
      intensity={100}
      style={StyleSheet.absoluteFill}
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
    />
  );
};

export const useBottomTabOverflow = () => {
  return useBottomTabBarHeight();
};
