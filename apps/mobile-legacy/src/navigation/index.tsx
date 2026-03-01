import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { HomeScreen } from '@/navigation/screens/Home';
import { ProfileScreen } from '@/navigation/screens/Profile';

const TabNavigator = createBottomTabNavigator({
  screenOptions: () => ({
    headerShown: false,
    tabBarActiveTintColor: '#007AFF',
    tabBarInactiveTintColor: 'gray',
  }),
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

export const Navigation = createStaticNavigation(TabNavigator);
