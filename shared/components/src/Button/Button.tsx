import {
  type StyleProp,
  StyleSheet,
  TouchableOpacity,
  type ViewStyle,
} from 'react-native';
import { Text } from '../Text/Text';

type Properties = ViewStyle & {
  readonly disabled?: boolean;
  readonly onPress: () => void;
  readonly style?: StyleProp<ViewStyle>;
  readonly title: string;
};

export const Button = ({
  disabled,
  onPress,
  style,
  title,
  ...rest
}: Properties) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: disabled ? '#CCCCCC' : '#007AFF',
      borderRadius: 8,
      justifyContent: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      ...rest,
    },
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Text
        color={disabled ? '#666666' : '#FFFFFF'}
        fontSize={16}
        fontWeight="600"
        title={title}
      />
    </TouchableOpacity>
  );
};
