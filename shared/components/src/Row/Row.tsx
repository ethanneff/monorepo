import { spacing } from '@shared/utils';
import { View, type ViewProperties } from '../View/View';

export const Row = ({ children, ...rest }: ViewProperties) => {
  return (
    <View
      flexDirection="row"
      flexWrap="wrap"
      gap={spacing(4)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </View>
  );
};
