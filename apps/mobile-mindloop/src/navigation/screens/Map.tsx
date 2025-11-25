import { Text, View } from '@shared/components';
import { spacing } from '@shared/utils';

export const MapScreen = () => {
  return (
    <View
      alignItems="center"
      flex={1}
      justifyContent="center"
      padding={spacing.$24}
    >
      <Text
        textAlign="center"
        title="Map Screen"
      />
      <Text
        textAlign="center"
        title="This is where the map will be displayed"
      />
    </View>
  );
};
