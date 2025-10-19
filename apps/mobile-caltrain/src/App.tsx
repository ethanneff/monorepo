import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';
import { Colors } from './constants/Colors';
import { Navigation } from './navigation';

void SplashScreen.preventAutoHideAsync();

export const App = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  const handleReady = useCallback(() => {
    void SplashScreen.hideAsync();
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const theme =
    colorScheme === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            primary: Colors[colorScheme].tint,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: Colors[colorScheme ?? 'light'].tint,
          },
        };

  return (
    <Navigation
      linking={{ enabled: 'auto', prefixes: ['helloworld://'] }}
      onReady={handleReady}
      theme={theme}
    />
  );
};
