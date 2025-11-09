import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

export const ReminderSetupScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();
  const [reminderTime, setReminderTime] = useState('9:00 AM');

  useEffect(() => {
    postHog.capture('reminder_setup_screen_viewed');
  }, [postHog]);

  const handleComplete = () => {
    postHog.capture('onboarding_completed', { reminderTime });
    // Navigate to main app
    navigation.navigate('MainTabs' as never);
  };

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={8}
        title="Set your daily reminder"
      />
      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        title="When would you like to receive your daily challenge?"
      />

      <View
        alignItems="center"
        backgroundColor="#F0F0F0"
        borderRadius={12}
        marginBottom={32}
        padding={40}
      >
        <Text
          fontSize={48}
          fontWeight="bold"
          title={reminderTime}
        />
        <Text
          color="#666"
          fontSize={14}
          marginTop={8}
          title="(Time picker will be implemented)"
        />
      </View>

      <View
        backgroundColor="#FFF9E6"
        borderRadius={12}
        padding={16}
      >
        <Text
          fontSize={14}
          title="💡 Tip: Morning challenges help you start your day with intention and make the most of your perceived time."
        />
      </View>

      <View
        flex={1}
        justifyContent="flex-end"
      >
        <Button
          onPress={handleComplete}
          title="Complete Setup"
        />
      </View>
    </View>
  );
};

