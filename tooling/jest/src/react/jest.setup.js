// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@expo/vector-icons/Entypo', () => ({
  __esModule: true,
  default: 'Entypo',
  glyphMap: {},
}));

// Set Jest timeout to prevent hanging
jest.setTimeout(5000);

// Mock IntersectionObserver for components that use scroll-based animations
global.IntersectionObserver = class IntersectionObserver {
  constructor() {
    this.observe = jest.fn();
    this.disconnect = jest.fn();
    this.unobserve = jest.fn();
  }
};

// Mock react-native-safe-area-context for web
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: ({ children, ...props }) => children,
  SafeAreaProvider: ({ children }) => children,
  SafeAreaInsetsContext: {
    Consumer: ({ children }) =>
      children({ top: 0, right: 0, bottom: 0, left: 0 }),
  },
  useSafeAreaInsets: () => ({ top: 0, right: 0, bottom: 0, left: 0 }),
  useSafeAreaFrame: () => ({ x: 0, y: 0, width: 390, height: 844 }),
  initialWindowMetrics: {
    insets: { top: 0, right: 0, bottom: 0, left: 0 },
    frame: { x: 0, y: 0, width: 390, height: 844 },
  },
}));

// Mock react-native-gesture-handler for web
jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const mockComponent = (name) => {
    const Component = (props) =>
      React.createElement(name, props, props.children);
    Component.displayName = name;
    return Component;
  };

  return {
    GestureHandlerRootView: mockComponent('GestureHandlerRootView'),
    State: {},
    Directions: {},
    gestureHandlerRootHOC: (Component) => Component,
    Swipeable: mockComponent('Swipeable'),
    DrawerLayout: mockComponent('DrawerLayout'),
    PanGestureHandler: mockComponent('PanGestureHandler'),
    TapGestureHandler: mockComponent('TapGestureHandler'),
    FlingGestureHandler: mockComponent('FlingGestureHandler'),
    ForceTouchGestureHandler: mockComponent('ForceTouchGestureHandler'),
    LongPressGestureHandler: mockComponent('LongPressGestureHandler'),
    PinchGestureHandler: mockComponent('PinchGestureHandler'),
    RotationGestureHandler: mockComponent('RotationGestureHandler'),
    RawButton: mockComponent('RawButton'),
    BaseButton: mockComponent('BaseButton'),
    RectButton: mockComponent('RectButton'),
    BorderlessButton: mockComponent('BorderlessButton'),
    FlatList: mockComponent('FlatList'),
    ScrollView: mockComponent('ScrollView'),
    TouchableHighlight: mockComponent('TouchableHighlight'),
    TouchableOpacity: mockComponent('TouchableOpacity'),
    TouchableWithoutFeedback: mockComponent('TouchableWithoutFeedback'),
    TouchableNativeFeedback: mockComponent('TouchableNativeFeedback'),
  };
});

// Global cleanup to prevent Jest from hanging due to timers
afterEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});
