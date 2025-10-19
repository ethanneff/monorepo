import '@expo/metro-runtime';
import { gestureHandler } from '@shared/components';
import { registerRootComponent } from 'expo';
import { App } from './src/App';

gestureHandler();
registerRootComponent(App);
