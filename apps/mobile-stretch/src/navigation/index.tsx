import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@/navigation/screens/Home';
import { ProfileScreen } from '@/navigation/screens/Profile';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

export const Navigation = createStaticNavigation(RootStack);
