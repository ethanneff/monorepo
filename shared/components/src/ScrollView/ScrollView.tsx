// eslint-disable-next-line no-restricted-imports
import { ScrollView as RNScrollView, type ScrollViewProps } from 'react-native';

export const ScrollView = ({ children, ...rest }: ScrollViewProps) => {
  return (
    <RNScrollView
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </RNScrollView>
  );
};
