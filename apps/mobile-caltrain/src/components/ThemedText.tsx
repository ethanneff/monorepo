import { StyleSheet, Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedTextProperties = TextProps & {
  readonly darkColor?: string;
  readonly lightColor?: string;
  readonly type?: 'default' | 'defaultSemiBold' | 'link' | 'subtitle' | 'title';
};

export const ThemedText = ({
  darkColor,
  lightColor,
  style,
  type = 'default',
  ...rest
}: ThemedTextProperties) => {
  const color = useThemeColor({ dark: darkColor, light: lightColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  link: {
    color: '#0a7ea4',
    fontSize: 16,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
