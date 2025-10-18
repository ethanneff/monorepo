import mockRNNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import { NativeModules } from 'react-native';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Set Jest timeout to prevent hanging
jest.setTimeout(2000);

jest.mock('expo-store-review', () => ({
  isAvailableAsync: jest.fn(() => Promise.resolve(true)),
  hasAction: jest.fn(() => Promise.resolve(true)),
  requestReview: jest.fn(() => Promise.resolve()),
}));
jest.mock('react-native-config', () => ({
  Config: {
    AM_MOBILE_APP_ENVIRONMENT: 'test',
  },
}));
jest.mock('react-native-webview', () => ({
  WebView: () => <div>Mock WebView</div>,
}));
jest.mock('@react-native-cookies/cookies', () => ({
  clearAll: jest.fn(),
}));
jest.mock('lottie-react-native', () => undefined);
jest.mock('react-native-localize', () => ({
  getCountry: jest.fn(() => 'US'),
  getLocales: jest.fn(() => ['en-US']),
  getTimeZone: jest.fn(() => 'America/New_York'),
  uses24HourClock: jest.fn(() => true),
  getCalendar: jest.fn(() => 'gregorian'),
  getCurrencies: jest.fn(() => ['USD']),
  getLocales: jest.fn(() => ['en-US']),
  getNumberFormatSettings: jest.fn(() => ({})),
  getTemperatureUnit: jest.fn(() => 'celsius'),
  getTimeZone: jest.fn(() => 'America/New_York'),
  uses24HourClock: jest.fn(() => true),
  usesAutoDateAndTime: jest.fn(() => true),
  usesAutoTimeZone: jest.fn(() => true),
  usesMetricSystem: jest.fn(() => true),
}));
jest.mock('@react-native-community/netinfo', () => mockRNNetInfo);
jest.mock('react-native-device-info', () => mockRNDeviceInfo);
jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
jest.mock('@react-native-firebase/crashlytics', () => ({
  log: jest.fn(),
  recordError: jest.fn(),
  setAttribute: jest.fn(),
  setUserIdentifier: jest.fn(),
  setUserName: jest.fn(),
  setUserEmail: jest.fn(),
  setEnabled: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  isCrashlyticsCollectionEnabled: jest.fn(),
  setCustomKey: jest.fn(),
  sendUnsentReports: jest.fn(),
  deleteUnsentReports: jest.fn(),
}));

jest.mock('@fullstory/react-native', () => ({
  identify: jest.fn(),
  setUserId: jest.fn(),
  setUserVars: jest.fn(),
  clearUserVars: jest.fn(),
  setDeviceId: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  startSession: jest.fn(),
  restartSession: jest.fn(),
  stopSession: jest.fn(),
  logEvent: jest.fn(),
  logNavigation: jest.fn(),
  setUserAttribute: jest.fn(),
  setOnceUserAttribute: jest.fn(),
  clearUserAttribute: jest.fn(),
  setUserVarsOnce: jest.fn(),
  setHostName: jest.fn(),
  clearRecordedEvents: jest.fn(),
  enableCrashlytics: jest.fn(),
  enableConsoleLogging: jest.fn(),
  enableDebugConsole: jest.fn(),
  enableDevMode: jest.fn(),
  enableIntegration: jest.fn(),
  disableIntegration: jest.fn(),
  enableInstrumentation: jest.fn(),
  disableInstrumentation: jest.fn(),
  enableJSC: jest.fn(),
  disableJSC: jest.fn(),
  enableLogs: jest.fn(),
  disableLogs: jest.fn(),
  setEventNamespace: jest.fn(),
  getSessionURL: jest.fn(),
  getSessionId: jest.fn(),
  getSessionEventCount: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  getPlaybackSessionURL: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  addOnReadyListener: jest.fn(),
  addOnErrorListener: jest.fn(),
  removeOnReadyListener: jest.fn(),
  removeOnErrorListener: jest.fn(),
  onReady: jest.fn(),
  onError: jest.fn(),
  setInForeground: jest.fn(),
  isInForeground: jest.fn(),
  VERSION: 'mocked-version',
}));
jest.mock('@react-navigation/core', () => ({
  ...jest.requireActual('@react-navigation/core'),
  useFocusEffect: () => jest.fn(),
  useNavigation: () => ({
    getState: () => ({ routes: [] }),
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

NativeModules.RNCAsyncStorage = {
  clear: jest.fn(),
  flushGetRequests: jest.fn(),
  getAllKeys: jest.fn(),
  getItem: jest.fn(),
  mergeItem: jest.fn(),
  multiGet: jest.fn(),
  multiMerge: jest.fn(),
  multiRemove: jest.fn(),
  multiSet: jest.fn(),
  removeChecklistItem: jest.fn(),
  setItem: jest.fn(),
};

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

// Mock Sentry to prevent interval timers from keeping Jest alive
jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
  reactNavigationIntegration: jest.fn(() => ({
    name: 'ReactNavigation',
    setupOnce: jest.fn(),
  })),
  setTag: jest.fn(),
  setExtra: jest.fn(),
  setUser: jest.fn(),
  setContext: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  addBreadcrumb: jest.fn(),
  wrap: jest.fn((component) => component),
  getCurrentHub: jest.fn(() => ({
    getClient: jest.fn(() => ({
      getOptions: jest.fn(() => ({})),
    })),
  })),
}));

// Mock Firebase Analytics to prevent native module errors
jest.mock('@react-native-firebase/analytics', () => ({
  getAnalytics: jest.fn(() => ({
    logEvent: jest.fn(),
    setUserProperty: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  })),
  initiateOnDeviceConversionMeasurementWithEmailAddress: jest.fn(),
  initiateOnDeviceConversionMeasurementWithPhoneNumber: jest.fn(),
  initiateOnDeviceConversionMeasurementWithUserData: jest.fn(),
}));

// Mock Firebase Messaging to prevent native module errors
jest.mock('@react-native-firebase/messaging', () => ({
  getMessaging: jest.fn(() => ({
    getToken: jest.fn(() => Promise.resolve('mock-token')),
    onMessage: jest.fn(),
    onNotificationOpenedApp: jest.fn(),
    getInitialNotification: jest.fn(() => Promise.resolve(null)),
    requestPermission: jest.fn(() => Promise.resolve(1)),
    hasPermission: jest.fn(() => Promise.resolve(true)),
    deleteToken: jest.fn(),
    onTokenRefresh: jest.fn(),
  })),
  AuthorizationStatus: {
    NOT_DETERMINED: 0,
    DENIED: 1,
    AUTHORIZED: 2,
    PROVISIONAL: 3,
  },
}));

// Mock Firebase Crashlytics to prevent native module errors
jest.mock('@react-native-firebase/crashlytics', () => ({
  getCrashlytics: jest.fn(() => ({
    log: jest.fn(),
    recordError: jest.fn(),
    setAttribute: jest.fn(),
    setUserIdentifier: jest.fn(),
    setUserName: jest.fn(),
    setUserEmail: jest.fn(),
    setEnabled: jest.fn(),
    setCrashlyticsCollectionEnabled: jest.fn(),
    isCrashlyticsCollectionEnabled: jest.fn(),
    setCustomKey: jest.fn(),
    sendUnsentReports: jest.fn(),
    deleteUnsentReports: jest.fn(),
  })),
}));

// Mock axios to prevent actual HTTP requests during tests
jest.mock('axios', () => {
  return {
    request: jest.fn(() => Promise.resolve({ data: {} })),
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    patch: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} })),
    create: jest.fn(() => ({
      request: jest.fn(() => Promise.resolve({ data: {} })),
      get: jest.fn(() => Promise.resolve({ data: {} })),
      post: jest.fn(() => Promise.resolve({ data: {} })),
      put: jest.fn(() => Promise.resolve({ data: {} })),
      patch: jest.fn(() => Promise.resolve({ data: {} })),
      delete: jest.fn(() => Promise.resolve({ data: {} })),
    })),
    isAxiosError: jest.fn((error) => error && error.isAxiosError === true),
    AxiosHeaders: jest.fn().mockImplementation(() => ({
      set: jest.fn(),
      get: jest.fn(),
      has: jest.fn(),
      delete: jest.fn(),
      clear: jest.fn(),
    })),
  };
});

jest.mock('expo-crypto', () => ({
  digestStringAsync: jest.fn(),
  randomUUID: jest.fn(),
}));

// Global cleanup to prevent Jest from hanging due to timers
afterEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});
