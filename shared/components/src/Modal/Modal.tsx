import {
  Modal as RNModal,
  StyleSheet,
  // eslint-disable-next-line no-restricted-imports
  TouchableWithoutFeedback,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useTheme } from '../Theme/useTheme';
import { View } from '../View/View';

type Properties = {
  readonly children: React.ReactNode;
  readonly onBackdropPress?: () => void;
};

export const Modal = ({ children, onBackdropPress }: Properties) => {
  const { colors, spacing } = useTheme();

  return (
    <RNModal
      style={{ ...StyleSheet.absoluteFill }}
      transparent
    >
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <View
          absoluteFillObject
          backgroundColor={colors.foreground}
          opacity={0.5}
        />
      </TouchableWithoutFeedback>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          padding: spacing.$16,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          alignSelf="center"
          backgroundColor={colors.background}
          borderColor={colors.border}
          borderRadius={spacing.$8}
          borderWidth={1}
          hasDropShadow
          padding={spacing.$8}
        >
          {children}
        </View>
      </KeyboardAwareScrollView>
    </RNModal>
  );
};
