import { Text, View } from '@shared/components';
import { spacing } from '@shared/utils';

export const ChallengesScreen = () => {
  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={spacing.$24}
    >
      <Text
        textAlign="center"
        title="Challenges Screen"
      />
      <Text
        textAlign="center"
        title="This is where challenges will be displayed"
      />
    </View>
  );
};
