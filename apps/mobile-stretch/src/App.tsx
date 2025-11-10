import { useNavigationContainerRef } from '@react-navigation/native';
import { PostHogProvider, usePostHog } from 'posthog-react-native';
import { useCallback, useRef } from 'react';
import { Navigation, type RootStackParameterList } from './navigation';

export const App = () => {
  const navigationReference =
    useNavigationContainerRef<RootStackParameterList>();
  const routeNameReference = useRef<keyof RootStackParameterList>(undefined);
  const postHog = usePostHog();

  const handleStateChange = useCallback(() => {
    const previousRouteName = routeNameReference.current;
    const currentRouteName =
      navigationReference.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName && currentRouteName) {
      // postHog.capture('screen_viewed', { screen: currentRouteName });
    }

    routeNameReference.current = currentRouteName;
  }, [postHog, navigationReference, routeNameReference]);

  const handleReady = useCallback(() => {
    routeNameReference.current =
      navigationReference.current?.getCurrentRoute()?.name;
  }, [navigationReference, routeNameReference]);

  return (
    <PostHogProvider
      apiKey="phc_gfGmVVQmnCV9wlt4BFKKqyZuorzfLI05eWN2DrebfQY"
      autocapture={{
        captureScreens: false,
        captureTouches: true,
      }}
      options={{ host: 'https://us.i.posthog.com' }}
    >
      <Navigation
        onReady={handleReady}
        onStateChange={handleStateChange}
        ref={navigationReference}
      />
    </PostHogProvider>
  );
};
