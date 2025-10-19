// eslint-disable-next-line no-restricted-imports
import { View, type ViewProps } from 'react-native';

type SafeAreaViewProperties = ViewProps;

export const SafeAreaView = ({ ...rest }: SafeAreaViewProperties) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <View {...rest} />;
};
