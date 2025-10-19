import {
  SymbolView,
  type SymbolViewProps,
  type SymbolWeight,
} from 'expo-symbols';
import { type StyleProp, type ViewStyle } from 'react-native';

export const IconSymbol = ({
  color,
  name,
  size = 24,
  style,
  weight = 'regular',
}: {
  readonly color: string;
  readonly name: SymbolViewProps['name'];
  readonly size?: number;
  readonly style?: StyleProp<ViewStyle>;
  readonly weight?: SymbolWeight;
}) => {
  return (
    <SymbolView
      name={name}
      resizeMode="scaleAspectFit"
      style={[
        {
          height: size,
          width: size,
        },
        style,
      ]}
      tintColor={color}
      weight={weight}
    />
  );
};
