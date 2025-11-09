import { useNavigation } from '@react-navigation/native';
import { Button, Text, TouchableOpacity, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useCallback, useEffect, useState } from 'react';

type InterestCategory = 'adventurous' | 'creative' | 'mindful' | 'social';

const INTERESTS: {
  description: string;
  emoji: string;
  id: InterestCategory;
  title: string;
}[] = [
  {
    description: 'Connect with others',
    emoji: '👋',
    id: 'social',
    title: 'Social',
  },
  {
    description: 'Express yourself',
    emoji: '🎨',
    id: 'creative',
    title: 'Creative',
  },
  {
    description: 'Find presence',
    emoji: '🧘',
    id: 'mindful',
    title: 'Mindful',
  },
  {
    description: 'Explore new places',
    emoji: '🗺️',
    id: 'adventurous',
    title: 'Adventurous',
  },
];

export const InterestSelectionScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();
  const [selectedInterests, setSelectedInterests] = useState<
    Set<InterestCategory>
  >(() => new Set());

  useEffect(() => {
    postHog.capture('interest_selection_screen_viewed');
  }, [postHog]);

  const toggleInterest = useCallback((interest: InterestCategory) => {
    setSelectedInterests((previous) => {
      const newSet = new Set(previous);
      if (newSet.has(interest)) {
        newSet.delete(interest);
      } else {
        newSet.add(interest);
      }
      return newSet;
    });
  }, []);

  const handleContinue = useCallback(() => {
    postHog.capture('interests_selected', {
      interests: [...selectedInterests],
    });
    navigation.navigate('ComfortLevel' as never);
  }, [navigation, postHog, selectedInterests]);

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={8}
        title="What interests you?"
      />
      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        title="Select all that apply. We'll personalize your challenges."
      />

      <View gap={16}>
        {INTERESTS.map((interest) => {
          const isSelected = selectedInterests.has(interest.id);
          const handlePress = () => {
            toggleInterest(interest.id);
          };
          return (
            <TouchableOpacity
              key={interest.id}
              onPress={handlePress}
            >
              <View
                backgroundColor={isSelected ? '#007AFF' : '#F0F0F0'}
                borderRadius={12}
                flexDirection="row"
                gap={16}
                padding={20}
              >
                <Text
                  fontSize={32}
                  title={interest.emoji}
                />
                <View flex={1}>
                  <Text
                    color={isSelected ? '#FFF' : '#000'}
                    fontSize={18}
                    fontWeight="600"
                    title={interest.title}
                  />
                  <Text
                    color={isSelected ? '#FFF' : '#666'}
                    fontSize={14}
                    title={interest.description}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        flex={1}
        justifyContent="flex-end"
      >
        <Button
          disabled={selectedInterests.size === 0}
          onPress={handleContinue}
          title="Continue"
        />
      </View>
    </View>
  );
};
