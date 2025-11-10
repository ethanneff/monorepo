import { Button, Text, TouchableOpacity, View } from '@shared/components';
import { PostHog } from '@shared/features';
import { useEffect } from 'react';

export const SettingsScreen = () => {
  const postHog = PostHog.usePostHog();

  useEffect(() => {
    postHog.capture('settings_screen_viewed');
  }, [postHog]);

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        { label: 'Edit Interests', icon: '🎯' },
        { label: 'Comfort Level', icon: '⚡' },
        { label: 'Daily Reminder', icon: '🔔' },
        { label: 'Notifications', icon: '📱' },
      ],
    },
    {
      title: 'Account',
      items: [
        { label: 'Profile', icon: '👤' },
        { label: 'Upgrade to Premium', icon: '⭐' },
        { label: 'Privacy Settings', icon: '🔒' },
      ],
    },
    {
      title: 'About',
      items: [
        { label: 'How Stretch Works', icon: '💡' },
        { label: 'Share Feedback', icon: '💬' },
        { label: 'Terms & Privacy', icon: '📄' },
        { label: 'Version 1.0.0', icon: 'ℹ️' },
      ],
    },
  ];

  return (
    <View
      flex={1}
      padding={24}
    >
      <Text
        fontSize={28}
        fontWeight="bold"
        marginBottom={24}
        title="Settings"
      />

      {settingsSections.map((section) => (
        <View
          key={section.title}
          marginBottom={24}
        >
          <Text
            color="#666"
            fontSize={14}
            fontWeight="600"
            marginBottom={12}
            title={section.title.toUpperCase()}
          />
          <View
            backgroundColor="#F0F0F0"
            borderRadius={12}
            overflow="hidden"
          >
            {section.items.map((item, index) => (
              <TouchableOpacity key={item.label}>
                <View
                  alignItems="center"
                  borderBottomColor="#E0E0E0"
                  borderBottomWidth={index < section.items.length - 1 ? 1 : 0}
                  flexDirection="row"
                  gap={12}
                  padding={16}
                >
                  <Text
                    fontSize={20}
                    title={item.icon}
                  />
                  <Text
                    flex={1}
                    fontSize={16}
                    title={item.label}
                  />
                  <Text
                    color="#999"
                    fontSize={16}
                    title="›"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <Button
        title="Sign Out"
      />
    </View>
  );
};

