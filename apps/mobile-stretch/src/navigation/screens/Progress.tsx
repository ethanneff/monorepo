import { Text, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useEffect } from 'react';

export const ProgressScreen = () => {
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('progress_screen_viewed');
  }, [postHog]);

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={24}
        title="Your Progress"
      />

      {/* Time Expansion Meter */}
      <View
        backgroundColor="#F0F0F0"
        borderRadius={16}
        marginBottom={24}
        padding={20}
      >
        <Text
          fontSize={18}
          fontWeight="600"
          marginBottom={16}
          title="⏳ Time Expansion Meter"
        />
        <View
          backgroundColor="#E0E0E0"
          borderRadius={8}
          height={20}
          marginBottom={12}
          overflow="hidden"
        >
          <View
            backgroundColor="#4CAF50"
            height="100%"
            width="70%"
          />
        </View>
        <Text
          color="#666"
          fontSize={14}
          title="Level 3 - 350/500 XP"
        />
      </View>

      {/* Streak */}
      <View
        backgroundColor="#FFF9E6"
        borderRadius={16}
        marginBottom={24}
        padding={20}
      >
        <View
          alignItems="center"
          flexDirection="row"
          gap={12}
          marginBottom={8}
        >
          <Text
            fontSize={32}
            title="🔥"
          />
          <Text
            fontSize={24}
            fontWeight="bold"
            title="7 Day Streak"
          />
        </View>
        <Text
          color="#666"
          fontSize={14}
          title="You're on a roll! Keep going to reach 14 days."
        />
      </View>

      {/* Category Progress */}
      <Text
        fontSize={18}
        fontWeight="600"
        marginBottom={16}
        title="Category Progress"
      />
      <View gap={12}>
        {[
          { category: 'Social', emoji: '👋', level: 4, progress: 60 },
          { category: 'Creative', emoji: '🎨', level: 3, progress: 40 },
          { category: 'Mindful', emoji: '🧘', level: 5, progress: 80 },
          { category: 'Adventurous', emoji: '🗺️', level: 2, progress: 30 },
        ].map((item) => (
          <View
            backgroundColor="#F0F0F0"
            borderRadius={12}
            key={item.category}
            padding={16}
          >
            <View
              alignItems="center"
              flexDirection="row"
              gap={12}
              marginBottom={8}
            >
              <Text
                fontSize={24}
                title={item.emoji}
              />
              <View flex={1}>
                <Text
                  fontSize={16}
                  fontWeight="600"
                  title={item.category}
                />
                <Text
                  color="#666"
                  fontSize={12}
                  title={`Level ${item.level}`}
                />
              </View>
            </View>
            <View
              backgroundColor="#E0E0E0"
              borderRadius={4}
              height={8}
              overflow="hidden"
            >
              <View
                backgroundColor="#007AFF"
                height="100%"
                width={`${item.progress}%`}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
