// Provide React Native bridge globals so NativeModules/TurboModuleRegistry don't throw in Jest.
// Must run before any react-native code loads (e.g. from @testing-library/react-native).
// nativeModuleProxy: RN expects each module to have getConstants(); use a Proxy so any accessed module returns a mock.
if (typeof global.nativeModuleProxy === 'undefined') {
  const mockNativeModule = () => ({ getConstants: () => ({}) });
  global.nativeModuleProxy = new Proxy(
    {},
    {
      get(_, name) {
        return mockNativeModule();
      },
    },
  );
}
if (typeof global.__turboModuleProxy === 'undefined') {
  const defaultDimensions = {
    window: { width: 400, height: 800, scale: 1, fontScale: 1 },
    screen: { width: 400, height: 800, scale: 1, fontScale: 1 },
  };
  const mockTurboModule = (name) =>
    name === 'DeviceInfo'
      ? { getConstants: () => ({ Dimensions: defaultDimensions }) }
      : { getConstants: () => ({}) };
  global.__turboModuleProxy = (name) => mockTurboModule(name);
}

import mockRNNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

// Mock react-native-worklets first (required by react-native-reanimated)
jest.mock('react-native-worklets', () => ({}));

// Mock react-native-reanimated so components using Animated work in Jest
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  return {
    __esModule: true,
    default: View,
    useAnimatedStyle: jest.fn(() => ({})),
    useSharedValue: jest.fn((v) => ({ value: v })),
    withSpring: jest.fn((v) => v),
    withTiming: jest.fn((v) => v),
    Easing: {},
    runOnJS: jest.fn((fn) => fn),
    FadeIn: View,
    FadeOut: View,
    LinearTransition: View,
    SlideInRight: View,
    SlideOutLeft: View,
  };
});

// Mock react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn((Comp) => Comp),
    Directions: {},
    GestureHandlerRootView: View,
  };
});

// Set Jest timeout to prevent hanging
jest.setTimeout(2000);

jest.mock('expo-store-review', () => ({
  isAvailableAsync: jest.fn(() => Promise.resolve(true)),
  hasAction: jest.fn(() => Promise.resolve(true)),
  requestReview: jest.fn(() => Promise.resolve()),
}));
jest.mock('react-native-webview', () => ({
  WebView: () => <div>Mock WebView</div>,
}));
jest.mock('lottie-react-native', () => undefined);
jest.mock('@expo/vector-icons/MaterialCommunityIcons', () => {
  const React = require('react');
  return {
    __esModule: true,
    default: 'MaterialCommunityIcons',
    glyphMap: {},
  };
});
jest.mock('expo-image', () => ({
  Image: 'Image',
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
jest.mock('react-native-keyboard-controller', () => {
  const React = require('react');
  const { ScrollView } = require('react-native');
  return {
    KeyboardAwareScrollView: ScrollView,
    KeyboardProvider: ({ children }) => children,
    KeyboardController: {
      setInputMode: jest.fn(),
      setDefaultMode: jest.fn(),
    },
    useKeyboardAnimation: jest.fn(() => ({
      height: { value: 0 },
      progress: { value: 0 },
    })),
    useReanimatedKeyboardAnimation: jest.fn(() => ({
      height: { value: 0 },
      progress: { value: 0 },
    })),
  };
});
jest.mock('@react-navigation/core', () => ({
  ...jest.requireActual('@react-navigation/core'),
  useFocusEffect: () => jest.fn(),
  useNavigation: () => ({
    getState: () => ({ routes: [] }),
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

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

// Mock react-native-mmkv (uses Nitro/native modules not available in Jest)
jest.mock('react-native-mmkv', () => {
  const storage = new Map();
  return {
    createMMKV: () => ({
      getString: (name) => storage.get(name) ?? undefined,
      set: (name, value) => storage.set(name, value),
      remove: (name) => storage.delete(name),
    }),
  };
});

// Global cleanup to prevent Jest from hanging due to timers
afterEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});
