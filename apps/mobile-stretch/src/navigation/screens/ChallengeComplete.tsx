import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useEffect } from 'react';

export const ChallengeCompleteScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('challenge_complete_screen_viewed');
  }, [postHog]);

  const handleContinue = () => {
    navigation.navigate('MainTabs' as never);
  };

  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={24}
    >
      <Text
        fontSize={72}
        marginBottom={24}
        title="🎉"
      />
      <Text
        fontSize={32}
        fontWeight="bold"
        marginBottom={16}
        textAlign="center"
        title="Challenge Complete!"
      />

      <View
        backgroundColor="#E8F5E9"
        borderRadius={16}
        marginBottom={32}
        padding={24}
        width="100%"
      >
        <View
          alignItems="center"
          marginBottom={20}
        >
          <Text
            color="#666"
            fontSize={14}
            marginBottom={8}
            title="XP EARNED"
          />
          <Text
            color="#4CAF50"
            fontSize={48}
            fontWeight="bold"
            title="+50"
          />
        </View>

        <View
          backgroundColor="#FFF"
          borderRadius={12}
          padding={16}
        >
          <View
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={12}
          >
            <Text
              fontSize={14}
              title="Current Streak"
            />
            <Text
              fontSize={14}
              fontWeight="bold"
              title="🔥 7 days"
            />
          </View>
          <View
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={12}
          >
            <Text
              fontSize={14}
              title="Total XP"
            />
            <Text
              fontSize={14}
              fontWeight="bold"
              title="350 XP"
            />
          </View>
          <View
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              fontSize={14}
              title="Level"
            />
            <Text
              fontSize={14}
              fontWeight="bold"
              title="Level 3"
            />
          </View>
        </View>
      </View>

      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        textAlign="center"
        title="You're making time feel longer, one moment at a time."
      />

      <Button
        onPress={handleContinue}
        title="Back to Home"
      />
    </View>
  );
};
