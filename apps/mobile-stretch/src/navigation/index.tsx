import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  type StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Modal/Stack Screens
import { ChallengeCompleteScreen } from '@/navigation/screens/ChallengeComplete';
import { ChallengeDetailScreen } from '@/navigation/screens/ChallengeDetail';
import { ChallengeReflectionScreen } from '@/navigation/screens/ChallengeReflection';
import { ComfortLevelScreen } from '@/navigation/screens/ComfortLevel';
// Main Tab Screens
import { DailyChallengeScreen } from '@/navigation/screens/DailyChallenge';
import { InterestSelectionScreen } from '@/navigation/screens/InterestSelection';
import { ProfileScreen } from '@/navigation/screens/Profile';
import { ProgressScreen } from '@/navigation/screens/Progress';
// Onboarding Screens
import { ReminderSetupScreen } from '@/navigation/screens/ReminderSetup';
import { SettingsScreen } from '@/navigation/screens/Settings';
import { WelcomeScreen } from '@/navigation/screens/Welcome';

/**
 * Main Tabs Navigator
 * Contains the primary app screens accessible via bottom tabs
 */
const MainTabs = createBottomTabNavigator({
  screens: {
    DailyChallenge: {
      options: {
        tabBarIcon: () => '⏳',
        title: 'Today',
      },
      screen: DailyChallengeScreen,
    },
    Profile: {
      options: {
        tabBarIcon: () => '👤',
        title: 'Profile',
      },
      screen: ProfileScreen,
    },
    Progress: {
      options: {
        tabBarIcon: () => '📊',
        title: 'Progress',
      },
      screen: ProgressScreen,
    },
  },
});

/**
 * Onboarding Stack
 * First-time user experience flow
 */
const OnboardingStack = createNativeStackNavigator({
  screens: {
    ComfortLevel: {
      options: {
        headerBackTitle: 'Back',
        title: 'Comfort Level',
      },
      screen: ComfortLevelScreen,
    },
    InterestSelection: {
      options: {
        headerBackTitle: 'Back',
        title: 'Select Interests',
      },
      screen: InterestSelectionScreen,
    },
    ReminderSetup: {
      options: {
        headerBackTitle: 'Back',
        title: 'Daily Reminder',
      },
      screen: ReminderSetupScreen,
    },
    Welcome: {
      options: {
        headerShown: false,
      },
      screen: WelcomeScreen,
    },
  },
});

/**
 * Root Stack Navigator
 * Top-level navigator that includes onboarding, main app, and modal screens
 */
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Onboarding',
  screens: {
    // Modal Screens (Challenge Flow)
    ChallengeComplete: {
      options: {
        headerShown: false,
        presentation: 'modal',
      },
      screen: ChallengeCompleteScreen,
    },
    ChallengeDetail: {
      options: {
        presentation: 'modal',
        title: 'Challenge',
      },
      screen: ChallengeDetailScreen,
    },
    ChallengeReflection: {
      options: {
        presentation: 'modal',
        title: 'Reflect',
      },
      screen: ChallengeReflectionScreen,
    },
    // Main App (Tabs)
    MainTabs: {
      options: {
        headerShown: false,
      },
      screen: MainTabs,
    },
    // Onboarding Flow
    Onboarding: {
      options: {
        headerShown: false,
      },
      screen: OnboardingStack,
    },
    // Settings (Modal)
    Settings: {
      options: {
        presentation: 'modal',
        title: 'Settings',
      },
      screen: SettingsScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

export type RootStackParameterList = StaticParamList<typeof RootStack>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/consistent-type-definitions, unicorn/prevent-abbreviations
    interface RootParamList extends RootStackParameterList {}
  }
}
