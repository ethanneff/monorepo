/* eslint-disable perfectionist/sort-imports */
import { ChallengesScreen } from '@/navigation/screens/Challenges';
import { MapScreen } from '@/navigation/screens/Map';
import { ProfileScreen } from '@/navigation/screens/Profile';
import { SocialScreen } from '@/navigation/screens/Social';
// eslint-disable-next-line no-restricted-imports
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';

const getIconName = (
  routeName: string,
  focused: boolean,
): keyof typeof Ionicons.glyphMap => {
  switch (routeName) {
    case 'Challenges': {
      return focused ? 'trophy' : 'trophy-outline';
    }
    case 'Map': {
      return focused ? 'map' : 'map-outline';
    }
    case 'Profile': {
      return focused ? 'person' : 'person-outline';
    }
    case 'Social': {
      return focused ? 'people' : 'people-outline';
    }
    default: {
      return 'help-outline';
    }
  }
};

const TabNavigator = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: '#007AFF',
    tabBarIcon: ({ color, focused, size }) => {
      const iconName = getIconName(route.name, focused);
      return (
        <Ionicons
          color={color}
          name={iconName}
          size={size}
        />
      );
    },
    tabBarInactiveTintColor: 'gray',
  }),
  screens: {
    Challenges: ChallengesScreen,
    Map: MapScreen,
    Profile: ProfileScreen,
    Social: SocialScreen,
  },
});

export const Navigation = createStaticNavigation(TabNavigator);

/* eslint-enable perfectionist/sort-imports */
