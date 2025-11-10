import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useCallback, useEffect, useState } from 'react';

export const ChallengeReflectionScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();
  const [timePerception] = useState<number>(3);
  const [reflectionNote] = useState('');

  useEffect(() => {
    postHog.capture('challenge_reflection_screen_viewed');
  }, [postHog]);

  const handleComplete = useCallback(() => {
    postHog.capture('reflection_completed', {
      hasNote: reflectionNote.length > 0,
      timePerception,
    });
    navigation.navigate('ChallengeComplete' as never);
  }, [navigation, postHog, reflectionNote.length, timePerception]);

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={8}
        title="How did it feel?"
      />
      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        title="Take a moment to reflect on your experience."
      />

      <View marginBottom={32}>
        <Text
          fontSize={18}
          fontWeight="600"
          marginBottom={16}
          title="Did today feel longer?"
        />
        <View
          backgroundColor="#F0F0F0"
          borderRadius={12}
          padding={20}
        >
          <View
            flexDirection="row"
            gap={8}
            justifyContent="space-between"
            marginBottom={12}
          >
            {['😴', '😐', '🙂', '😊', '🤩'].map((emoji, index) => (
              <Text
                fontSize={32}
                key={emoji}
                opacity={timePerception === index + 1 ? 1 : 0.3}
                title={emoji}
              />
            ))}
          </View>
          <Text
            color="#666"
            fontSize={12}
            textAlign="center"
            title="Slider will be implemented"
          />
        </View>
      </View>

      <View marginBottom={32}>
        <Text
          fontSize={18}
          fontWeight="600"
          marginBottom={16}
          title="Any thoughts? (Optional)"
        />
        <View
          backgroundColor="#F0F0F0"
          borderRadius={12}
          minHeight={120}
          padding={16}
        >
          <Text
            color="#999"
            fontSize={14}
            title="Write about your experience..."
          />
        </View>
      </View>

      <View
        flex={1}
        justifyContent="flex-end"
      >
        <Button
          onPress={handleComplete}
          title="Complete"
        />
      </View>
    </View>
  );
};
