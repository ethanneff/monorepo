import { Button, Text, View } from '@shared/components';
import { useStore } from '@shared/store';
import { spacing } from '@shared/utils';

export const ProfileScreen = () => {
  const { toggleTheme } = useStore((state) => state.application.actions);

  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={spacing.$24}
    >
      <Text
        textAlign="center"
        title="Edit src/navigation/screens/Profile.tsx to edit this screen."
      />
      <Button
        onPress={toggleTheme}
        title="Toggle Theme"
        variant="primary"
      />
    </View>
  );
};
