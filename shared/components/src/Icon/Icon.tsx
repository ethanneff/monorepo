// eslint-disable-next-line no-restricted-imports
import RNIcon from '@expo/vector-icons/MaterialCommunityIcons';

export type IconName = keyof typeof RNIcon.glyphMap;

type IconProperties = {
  readonly color: string;
  readonly name: IconName;
  readonly size: number;
};

export const Icon = ({ color, name, size }: IconProperties) => {
  return (
    <RNIcon
      color={color}
      name={name}
      size={size}
    />
  );
};
