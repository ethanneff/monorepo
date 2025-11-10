import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useCallback, useEffect } from 'react';

export const ChallengeDetailScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('challenge_detail_screen_viewed');
  }, [postHog]);

  const handleComplete = useCallback(() => {
    postHog.capture('challenge_marked_complete');
    navigation.navigate('ChallengeReflection' as never);
  }, [navigation, postHog]);

  const handleSkip = useCallback(() => {
    postHog.capture('challenge_skipped');
    navigation.goBack();
  }, [navigation, postHog]);

  const handleAddPhoto = useCallback(() => {
    // TODO: Implement photo/note functionality
  }, []);

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={16}
        title="Challenge in Progress"
      />

      <View
        backgroundColor="#E3F2FD"
        borderRadius={12}
        marginBottom={32}
        padding={20}
      >
        <Text
          fontSize={16}
          marginBottom={16}
          title="Tips for this challenge:"
        />
        <Text
          fontSize={14}
          marginBottom={8}
          title="• Start with a friendly smile"
        />
        <Text
          fontSize={14}
          marginBottom={8}
          title="• Keep it light and brief"
        />
        <Text
          fontSize={14}
          marginBottom={8}
          title="• Be genuinely curious"
        />
        <Text
          fontSize={14}
          title="• Notice how the conversation makes you feel"
        />
      </View>

      <View
        backgroundColor="#F0F0F0"
        borderRadius={12}
        marginBottom={32}
        padding={20}
      >
        <Text
          fontSize={14}
          fontWeight="600"
          marginBottom={8}
          title="Optional: Capture the moment"
        />
        <Text
          color="#666"
          fontSize={14}
          marginBottom={16}
          title="Take a photo or make a quick note to remember this experience."
        />
        <Button
          onPress={handleAddPhoto}
          title="Add Photo/Note"
        />
      </View>

      <View
        flex={1}
        justifyContent="flex-end"
      >
        <Button
          marginBottom={12}
          onPress={handleComplete}
          title="I Did It!"
        />
        <Button
          onPress={handleSkip}
          title="Skip for Today"
        />
      </View>
    </View>
  );
};
