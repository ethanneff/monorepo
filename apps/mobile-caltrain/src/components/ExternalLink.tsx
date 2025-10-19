import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, Pressable } from 'react-native';

type Properties = ComponentProps<typeof Pressable> & { readonly href: string };

export const ExternalLink = ({ children, href, ...rest }: Properties) => {
  return (
    <Pressable
      {...rest}
      onPress={async () => {
        if (Platform.OS === 'web') {
          // On web, open in new tab
          window.open(href, '_blank');
        } else {
          // On native, open in in-app browser
          await openBrowserAsync(href);
        }
      }}
    >
      {children}
    </Pressable>
  );
};
