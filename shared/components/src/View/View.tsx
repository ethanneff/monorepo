import { dropShadow } from '@shared/utils';
import { type ReactNode } from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  View as RNView,
  type StyleProp,
  StyleSheet,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView } from '../SafeAreaView/SafeAreaView';

export type ViewProperties = ViewProps &
  ViewStyle & {
    readonly absoluteFillObject?: boolean;
    readonly children?: ReactNode;
    readonly hasDropShadow?: boolean;
    readonly safeArea?: boolean;
    readonly safeAreaEdges?: SafeAreaEdges[];
    readonly style?: StyleProp<ViewStyle>;
  };

type SafeAreaEdges = 'bottom' | 'left' | 'right' | 'top';

export const View = ({
  absoluteFillObject,
  children,
  hasDropShadow,
  safeArea,
  safeAreaEdges,
  style,
  ...rest
}: ViewProperties) => {
  const absolute = absoluteFillObject ? StyleSheet.absoluteFillObject : {};
  const dropShadowStyle = dropShadow(hasDropShadow);
  const styles = StyleSheet.create({
    view: { ...absolute, ...dropShadowStyle, ...rest },
  });

  if (safeArea) {
    return (
      <SafeAreaView
        edges={safeAreaEdges}
        style={[styles.view, style]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </SafeAreaView>
    );
  }

  return (
    <RNView
      style={[styles.view, style]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </RNView>
  );
};
