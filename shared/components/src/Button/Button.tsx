// eslint-disable-next-line no-restricted-imports
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';

type Properties = {
  readonly onPress: () => void;
  readonly title: string;
};

export const Button = ({ onPress, title }: Properties) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text title={title} />
    </TouchableOpacity>
  );
};
