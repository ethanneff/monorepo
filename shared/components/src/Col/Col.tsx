import { responsive } from '@shared/utils';
import { View, type ViewProperties } from '../View/View';

export const Col = ({ children, ...rest }: ViewProperties) => {
  return (
    <View
      flex={1}
      gap={responsive(4)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </View>
  );
};
