import {
  // eslint-disable-next-line no-restricted-imports
  TouchableOpacity as RNTouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

export const TouchableOpacity = ({
  children,
  ...rest
}: TouchableOpacityProps) => {
  return (
    <RNTouchableOpacity
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </RNTouchableOpacity>
  );
};
