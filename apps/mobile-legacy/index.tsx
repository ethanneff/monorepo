import '@expo/metro-runtime';
import { StrictMode } from 'react';
import { gestureHandler } from '@shared/components';
import { registerRootComponent } from 'expo';
import { enableFreeze } from 'react-native-screens';
import { App } from './src/App';

enableFreeze(true);
gestureHandler();

const Root = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

registerRootComponent(Root);
