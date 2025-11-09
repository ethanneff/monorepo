import { Button, Text, TouchableOpacity, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

type ComfortLevel = 'introvert' | 'moderate' | 'bold';

const COMFORT_LEVELS: Array<{ id: ComfortLevel; title: string; description: string }> = [
  { id: 'introvert', title: '🤫 Introvert-Friendly', description: 'Gentle challenges that respect your comfort zone' },
  { id: 'moderate', title: '😊 Moderate', description: 'A balanced mix of familiar and new' },
  { id: 'bold', title: '🚀 Bold', description: 'Push boundaries and embrace the unexpected' },
];

export const ComfortLevelScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();
  const [selectedLevel, setSelectedLevel] = useState<ComfortLevel | null>(null);

  useEffect(() => {
    postHog.capture('comfort_level_screen_viewed');
  }, [postHog]);

  const handleContinue = () => {
    if (selectedLevel) {
      postHog.capture('comfort_level_selected', { level: selectedLevel });
      navigation.navigate('ReminderSetup' as never);
    }
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
        title="Choose your comfort level"
      />
      <Text
        color="#666"
        fontSize={16}
        marginBottom={32}
        title="How adventurous do you want your challenges to be?"
      />

      <View gap={16}>
        {COMFORT_LEVELS.map((level) => {
          const isSelected = selectedLevel === level.id;
          return (
            <TouchableOpacity
              key={level.id}
              onPress={() => setSelectedLevel(level.id)}
            >
              <View
                backgroundColor={isSelected ? '#007AFF' : '#F0F0F0'}
                borderRadius={12}
                padding={20}
              >
                <Text
                  color={isSelected ? '#FFF' : '#000'}
                  fontSize={20}
                  fontWeight="600"
                  marginBottom={8}
                  title={level.title}
                />
                <Text
                  color={isSelected ? '#FFF' : '#666'}
                  fontSize={14}
                  title={level.description}
                />
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
          disabled={!selectedLevel}
          onPress={handleContinue}
          title="Continue"
        />
      </View>
    </View>
  );
};

