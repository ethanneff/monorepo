import { type ScrollViewProps } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useTheme } from '../Theme/useTheme';

export const ScrollView = ({ children, ...rest }: ScrollViewProps) => {
  const { theme } = useTheme();
  const indicatorStyle = theme === 'dark' ? 'white' : 'black';

  return (
    <KeyboardAwareScrollView
      indicatorStyle={indicatorStyle}
      keyboardShouldPersistTaps="handled"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
