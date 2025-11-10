import { PostHogProvider, usePostHog } from 'posthog-react-native';

type PostHogProviderProperties = {
  readonly apiKey: string;
  readonly children: React.ReactNode;
};

export const PostHog = {
  usePostHog,
  Wrapper: ({ apiKey, children }: PostHogProviderProperties) => (
    <PostHogProvider
      apiKey={apiKey}
      options={{ host: 'https://us.i.posthog.com' }}
    >
      {children}
    </PostHogProvider>
  ),
};
