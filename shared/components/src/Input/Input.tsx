import { useTheme } from '@shared/utils';
import { useCallback, useRef, useState } from 'react';
import {
  // eslint-disable-next-line no-restricted-imports
  TextInput,
  type TextInputProps,
} from 'react-native';
import { Icon, type IconName } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Touchable } from '../Touchable/Touchable';
import { View } from '../View/View';

export type InputReference = TextInput;

type Properties = RequiredTextInputProperties &
  TextInputProps & {
    readonly error?: string;
    readonly label?: string;
    readonly ref?: React.Ref<InputReference>;
  };

type RequiredTextInputProperties = Required<
  Pick<
    TextInputProps,
    | 'autoCapitalize'
    | 'autoComplete'
    | 'autoCorrect'
    | 'defaultValue'
    | 'editable'
    | 'keyboardType'
    | 'onChangeText'
    | 'onSubmitEditing'
    | 'placeholder'
    | 'returnKeyType'
    | 'submitBehavior'
    | 'textContentType'
  >
>;

const getIcon = (
  hasValue: boolean,
  secureTextEntry: boolean | undefined,
): IconName => {
  if (!hasValue) return 'close';
  if (secureTextEntry === undefined) return 'close';
  if (secureTextEntry) return 'eye';
  return 'eye-off';
};

const iconSize = 16;

export const Input = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  defaultValue = '',
  editable,
  error = '',
  keyboardType,
  label,
  onChangeText,
  onSubmitEditing,
  placeholder,
  ref,
  returnKeyType,
  secureTextEntry,
  style,
  submitBehavior,
  textContentType,
}: Properties) => {
  const inputReference = useRef<TextInput>(null);
  const [value, setValue] = useState(defaultValue);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  const { colors, spacing } = useTheme();

  const handleChangeText = useCallback(
    (text: string) => {
      setValue(text);
      onChangeText(text);
    },
    [onChangeText],
  );

  const handleIconPress = useCallback(() => {
    if (secureTextEntry !== undefined) {
      setIsSecureTextEntry(!isSecureTextEntry);
      return;
    }
    setValue('');
    onChangeText('');
    inputReference.current?.focus();
  }, [onChangeText, secureTextEntry, isSecureTextEntry]);

  const handleLabelPress = useCallback(() => {
    inputReference.current?.focus();
  }, []);

  const handleReference = useCallback(
    (node: null | TextInput) => {
      inputReference.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref],
  );

  const showIcon = value.length > 0;
  const icon = getIcon(showIcon, isSecureTextEntry);

  return (
    <View gap={spacing.$4}>
      {label ? (
        <Touchable
          onPress={handleLabelPress}
          withoutFeedback
        >
          <Text
            title={label}
            variant="small"
          />
        </Touchable>
      ) : null}
      <View>
        <TextInput
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          autoCorrect={autoCorrect}
          cursorColor={colors.primary}
          editable={editable}
          keyboardType={keyboardType}
          onChangeText={handleChangeText}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={colors.mutedForeground}
          ref={handleReference}
          returnKeyType={returnKeyType}
          secureTextEntry={isSecureTextEntry}
          selectionColor={colors.primary}
          style={[
            {
              backgroundColor: colors.background,
              borderColor: error ? colors.destructive : colors.border,
              borderRadius: spacing.$8,
              borderWidth: 1,
              color: colors.foreground,
              padding: spacing.$8,
              paddingRight: showIcon ? iconSize + 2 * spacing.$8 : spacing.$8,
            },
            style,
          ]}
          submitBehavior={submitBehavior}
          textContentType={textContentType}
          value={value}
        />
        {showIcon ? (
          <View
            bottom={0}
            justifyContent="center"
            position="absolute"
            right={spacing.$8}
            top={0}
          >
            <Touchable onPress={handleIconPress}>
              <Icon
                color={colors.mutedForeground}
                name={icon}
                size={iconSize}
              />
            </Touchable>
          </View>
        ) : null}
      </View>
      {error ? (
        <Text
          color="destructive"
          title={error}
          variant="xsmall"
        />
      ) : null}
    </View>
  );
};
