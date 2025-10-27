// eslint-disable-next-line no-restricted-imports
import Entypo from '@expo/vector-icons/Entypo';

export type IconName = keyof typeof Entypo.glyphMap;

type IconProperties = {
  readonly color: string;
  readonly name: IconName;
  readonly size: number;
};

export const Icon = ({ color, name, size }: IconProperties) => {
  return (
    <Entypo
      color={color}
      name={name}
      size={size}
    />
  );
};
