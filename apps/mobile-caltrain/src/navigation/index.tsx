/* eslint-disable perfectionist/sort-objects */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen } from '@/navigation/screens/Account';
import { ProductsScreen } from '@/navigation/screens/Products';
import { TripDetailsScreen } from '@/navigation/screens/TripDetails';
import { TripToolsScreen } from '@/navigation/screens/TripTools';

const noHeader = { options: { headerShown: false } };

const TabStack = createBottomTabNavigator({
  screens: {
    Products: { screen: ProductsScreen, ...noHeader },
    TripTools: { screen: TripToolsScreen, ...noHeader },
    Account: { screen: AccountScreen, ...noHeader },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    App: { screen: TabStack, ...noHeader },
    TripDetails: { screen: TripDetailsScreen, ...noHeader },
  },
});

export const Navigation = createStaticNavigation(RootStack);

/* eslint-enable perfectionist/sort-objects */
