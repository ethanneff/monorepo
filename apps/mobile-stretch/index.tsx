import '@expo/metro-runtime';
import { gestureHandler } from '@shared/components';
import { registerRootComponent } from 'expo';
import { enableFreeze } from 'react-native-screens';
import { App } from './src/App';

enableFreeze(true);
gestureHandler();
registerRootComponent(App);
