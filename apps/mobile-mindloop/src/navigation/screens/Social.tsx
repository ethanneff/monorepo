import { Text, View } from '@shared/components';
import { spacing } from '@shared/utils';

export const SocialScreen = () => {
  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={spacing.$24}
    >
      <Text
        textAlign="center"
        title="Social Screen"
      />
      <Text
        textAlign="center"
        title="This is where social features will be displayed"
      />
    </View>
  );
};
