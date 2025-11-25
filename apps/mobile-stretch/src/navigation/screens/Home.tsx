import { Text, View } from '@shared/components';
import { spacing } from '@shared/utils';

export const HomeScreen = () => {
  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={spacing.$24}
    >
      <Text
        textAlign="center"
        title="Edit src/navigation/screens/Home.tsx to edit this screen."
      />
    </View>
  );
};
