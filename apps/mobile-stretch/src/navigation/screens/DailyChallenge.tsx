import { Button, Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

// Mock challenge data - will be replaced with API/database
const MOCK_CHALLENGE = {
  id: '1',
  category: 'social',
  title: 'Ask a stranger what made them smile today',
  description: 'Strike up a brief conversation with someone you don\'t know and ask them about their day.',
  estimatedTime: '5-10 min',
  xpReward: 50,
  emoji: '👋',
};

export const DailyChallengeScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('daily_challenge_screen_viewed');
  }, [postHog]);

  const handleStartChallenge = () => {
    postHog.capture('challenge_started', { challengeId: MOCK_CHALLENGE.id });
    navigation.navigate('ChallengeDetail' as never, { challengeId: MOCK_CHALLENGE.id } as never);
  };

  return (
    <View
      flex={1}
      padding={24}
    >
      <View alignItems="center">
        <Text
          color="#666"
          fontSize={14}
          marginBottom={8}
          title="TODAY'S CHALLENGE"
        />
        <Text
          fontSize={64}
          marginBottom={16}
          title={MOCK_CHALLENGE.emoji}
        />
      </View>

      <Text
        fontSize={24}
        fontWeight="bold"
        marginBottom={16}
        textAlign="center"
        title={MOCK_CHALLENGE.title}
      />

      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        textAlign="center"
        title={MOCK_CHALLENGE.description}
      />

      <View
        backgroundColor="#F0F0F0"
        borderRadius={12}
        marginBottom={32}
        padding={20}
      >
        <View
          flexDirection="row"
          justifyContent="space-between"
          marginBottom={12}
        >
          <Text
            color="#666"
            fontSize={14}
            title="Category"
          />
          <Text
            fontSize={14}
            fontWeight="600"
            title={MOCK_CHALLENGE.category}
          />
        </View>
        <View
          flexDirection="row"
          justifyContent="space-between"
          marginBottom={12}
        >
          <Text
            color="#666"
            fontSize={14}
            title="Estimated Time"
          />
          <Text
            fontSize={14}
            fontWeight="600"
            title={MOCK_CHALLENGE.estimatedTime}
          />
        </View>
        <View
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text
            color="#666"
            fontSize={14}
            title="XP Reward"
          />
          <Text
            fontSize={14}
            fontWeight="600"
            title={`${MOCK_CHALLENGE.xpReward} XP`}
          />
        </View>
      </View>

      <View
        backgroundColor="#FFF9E6"
        borderRadius={12}
        marginBottom={32}
        padding={16}
      >
        <Text
          fontSize={14}
          title="💡 Remember: The goal is novelty, not perfection. Even a small step outside your routine stretches time."
        />
      </View>

      <Button
        onPress={handleStartChallenge}
        title="Start Challenge"
      />
    </View>
  );
};

