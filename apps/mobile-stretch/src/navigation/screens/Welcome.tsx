import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useEffect } from 'react';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('welcome_screen_viewed');
  }, [postHog]);

  const handleGetStarted = () => {
    postHog.capture('welcome_get_started_pressed');
    navigation.navigate('InterestSelection' as never);
  };

  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={24}
    >
      <Text
        fontSize={48}
        marginBottom={16}
        title="⏳"
      />
      <Text
        fontSize={32}
        fontWeight="bold"
        marginBottom={8}
        textAlign="center"
        title="Welcome to Stretch"
      />
      <Text
        fontSize={18}
        marginBottom={32}
        textAlign="center"
        title="The app that makes time feel longer"
      />
      <Text
        color="#666"
        fontSize={16}
        marginBottom={48}
        textAlign="center"
        title="New experiences, every day. Because newness slows time."
      />
      <Button
        onPress={handleGetStarted}
        title="Get Started"
      />
    </View>
  );
};
