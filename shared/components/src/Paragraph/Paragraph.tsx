import { type PropsWithChildren } from 'react';
// eslint-disable-next-line no-restricted-imports
import { Text as RNText } from 'react-native';

export const Paragraph = ({ children }: PropsWithChildren) => {
  return <RNText>{children}</RNText>;
};
