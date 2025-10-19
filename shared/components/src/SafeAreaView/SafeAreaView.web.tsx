// eslint-disable-next-line no-restricted-imports
import { View, type ViewProps } from 'react-native';

type SafeAreaEdges = 'bottom' | 'left' | 'right' | 'top';

type SafeAreaViewProperties = ViewProps & {
  readonly edges?: SafeAreaEdges[];
};

// Web implementation - SafeAreaView just acts as a regular View on web
export const SafeAreaView = ({ edges: _, ...rest }: SafeAreaViewProperties) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <View {...rest} />;
};
