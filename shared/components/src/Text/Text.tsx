// eslint-disable-next-line no-restricted-imports
import { Text as RNText, type TextProps } from 'react-native';

type Properties = Omit<TextProps, 'children'> & {
  readonly title: string;
};

export const Text = ({ title, ...rest }: Properties) => {
  return (
    <RNText
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      allowFontScaling={false}
    >
      {title}
    </RNText>
  );
};
