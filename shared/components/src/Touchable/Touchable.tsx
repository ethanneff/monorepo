import {
  // eslint-disable-next-line no-restricted-imports
  Pressable,
  // eslint-disable-next-line no-restricted-imports
  TouchableOpacity as RNTouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';

type Properties = TouchableOpacityProps & {
  readonly withoutFeedback?: boolean;
};

export const Touchable = ({
  children,
  withoutFeedback = false,
  ...rest
}: Properties) => {
  if (withoutFeedback) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Pressable {...rest}>{children}</Pressable>;
  }
  return (
    <RNTouchableOpacity
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </RNTouchableOpacity>
  );
};
