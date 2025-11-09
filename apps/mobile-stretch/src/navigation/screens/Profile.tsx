import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useCallback, useEffect } from 'react';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('profile_screen_viewed');
  }, [postHog]);

  const handleSettings = useCallback(() => {
    navigation.navigate('Settings' as never);
  }, [navigation]);

  return (
    <View
      flex={1}
      padding={24}
    >
      {/* Header */}
      <View
        alignItems="center"
        marginBottom={32}
        marginTop={32}
      >
        <View
          alignItems="center"
          backgroundColor="#F0F0F0"
          borderRadius={50}
          height={100}
          justifyContent="center"
          marginBottom={16}
          width={100}
        >
          <Text
            fontSize={48}
            title="👤"
          />
        </View>
        <Text
          fontSize={24}
          fontWeight="bold"
          marginBottom={4}
          title="Stretch User"
        />
        <Text
          color="#666"
          fontSize={14}
          title="Member since Nov 2025"
        />
      </View>

      {/* Stats */}
      <View
        backgroundColor="#F0F0F0"
        borderRadius={16}
        marginBottom={24}
        padding={20}
      >
        <View
          flexDirection="row"
          justifyContent="space-around"
        >
          <View alignItems="center">
            <Text
              fontSize={32}
              fontWeight="bold"
              title="7"
            />
            <Text
              color="#666"
              fontSize={12}
              title="Day Streak"
            />
          </View>
          <View alignItems="center">
            <Text
              fontSize={32}
              fontWeight="bold"
              title="23"
            />
            <Text
              color="#666"
              fontSize={12}
              title="Completed"
            />
          </View>
          <View alignItems="center">
            <Text
              fontSize={32}
              fontWeight="bold"
              title="3"
            />
            <Text
              color="#666"
              fontSize={12}
              title="Level"
            />
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View gap={12}>
        <TouchableOpacity onPress={handleSettings}>
          <View
            backgroundColor="#F0F0F0"
            borderRadius={12}
            flexDirection="row"
            justifyContent="space-between"
            padding={16}
          >
            <Text
              fontSize={16}
              title="⚙️ Settings"
            />
            <Text
              color="#999"
              fontSize={16}
              title="›"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            backgroundColor="#F0F0F0"
            borderRadius={12}
            flexDirection="row"
            justifyContent="space-between"
            padding={16}
          >
            <Text
              fontSize={16}
              title="📊 View All Stats"
            />
            <Text
              color="#999"
              fontSize={16}
              title="›"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            backgroundColor="#F0F0F0"
            borderRadius={12}
            flexDirection="row"
            justifyContent="space-between"
            padding={16}
          >
            <Text
              fontSize={16}
              title="🎯 Edit Goals"
            />
            <Text
              color="#999"
              fontSize={16}
              title="›"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
