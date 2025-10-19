import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Explore } from './screens/Explore';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';

const HomeTabs = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarBackground: TabBarBackground,
    tabBarButton: HapticTab,
    tabBarStyle: Platform.select({
      default: {},
      ios: {
        position: 'absolute' as const,
      },
    }),
  },
  screens: {
    Explore: {
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol
            color={color}
            name="paperplane.fill"
            size={28}
          />
        ),
      },
      screen: Explore,
    },
    Home: {
      options: {
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <IconSymbol
            color={color}
            name="house.fill"
            size={28}
          />
        ),
      },
      screen: Home,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      options: {
        headerShown: false,
      },
      screen: HomeTabs,
    },
    NotFound: {
      linking: {
        path: '*',
      },
      options: {
        title: '404',
      },
      screen: NotFound,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParameterList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParameterList extends RootStackParameterList {}
  }
}
