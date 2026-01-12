import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { forwardRef, useCallback, useState } from 'react';
import type { Control, ControllerProps, Noop } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import type {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyType,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { tv } from 'tailwind-variants';

import { theme } from '@main/theme';

interface TextInputFieldProps {
  title?: string;
  placeholder?: string;
  control?: Control;
  name?: string;
  onChange?: (value: string) => void;
  value?: string;
  isError?: boolean;
  isValid?: boolean;
  isPassword?: boolean;
  isOTP?: boolean;
  enable?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyType;
  errorMessage?: string;
  blurOnSubmit?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  rules?: ControllerProps['rules'];
  multiline?: boolean;
  numberOfLines?: number;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  transform?: (value: string) => string;
  height?: number;
  customRightComponent?: React.ReactNode;
  mode?: 'default' | 'bottom-sheet';
  onKeyPress?: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void;
}

const TextInputField = forwardRef<TextInput, TextInputFieldProps>(
  (
    {
      title,
      placeholder,
      control,
      name,
      onChange,
      value,
      enable = true,
      readOnly = false,
      mode = 'default',
      maxLength,
      keyboardType = 'default',
      errorMessage,
      returnKeyType,
      autoCapitalize = 'none',
      autoCorrect = false,
      blurOnSubmit = true,
      isError,
      isValid,
      isOTP = false,
      isPassword = false,
      rules,
      multiline = false,
      numberOfLines,
      // height,
      onSubmitEditing,
      customRightComponent,
      onKeyPress,
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(!isPassword);
    const [isFocused, setIsFocused] = useState(false);
    // const { isDark } = useThemeColors();

    const togglePasswordVisibility = useCallback(() => {
      setPasswordVisible((prev) => !prev);
    }, []);

    const renderInput = ({
      onBlur,
      // onChange,
      // value,
      // isError,
      // isValid,
      // errorMessage,
      // enable = true,
    }: {
      enable?: boolean;
      onBlur?: Noop;
      onChange?: (text: string) => void;
      isValid?: boolean;
      value: string;
      isError: boolean;
      errorMessage?: string;
    }) => {
      // styles.useVariants({
      //   enable,
      //   multiline,
      //   isOTP,
      // });

      const onBlurField = (): void => {
        onBlur?.();
        setIsFocused(false);
      };

      const onFocusField = (): void => {
        setIsFocused(true);
      };
      const getStatusIcon = () => {
        if (isError)
          return (
            <MaterialIcons
              name="error"
              size={24}
              color={theme.colors.error[700]}
            />
          );
        if (isValid === true)
          return (
            <MaterialIcons
              name="check"
              size={24}
              color="green"
            />
          );
        return null;
      };

      const getBorderClasses = (): string => {
        if (isFocused) {
          return isError
            ? 'border-2 border-red-500'
            : 'border-2 border-gray-600';
        }

        return isError
          ? 'border-[1px] border-red-500'
          : 'border-[1px] border-gray-600';
      };

      const inputContainerStyle = tv({
        base: 'h-14 flex-row items-center rounded-lg bg-surface-dark px-4',
        variants: {
          multiline: {
            true: 'p-3',
          },
          enable: {
            true: getBorderClasses(),
            false: 'border-bg-surface-dark bg-surface-overlay',
          },
        },
      });

      const inputStyle = tv({
        base: 'flex-1 typo-text-input text-white h-full',
        variants: {
          enable: {
            true: `${isError ? 'border-error-700' : isFocused ? 'border-blue-500' : `border-blue-400`}`,

            false: 'border-error-700',
          },
        },
      });

      const inputProps = {
        // selectionColor:
        //   Platform.OS === 'android'
        //     ? theme.colors.blue[50]

        //     : theme.colors.blue[400],
        cursorColor: theme.colors.primary.DEFAULT,
        placeholderTextColor: theme.colors.gray[400],
        className: inputStyle({ enable }),
        placeholder,
        maxLength,
        keyboardType,
        mode,
        onFocus: onFocusField,
        onBlur: onBlurField,
        editable: enable,
        value,
        returnKeyType,
        blurOnSubmit,
        onChangeText: onChange,
        onSubmitEditing,
        autoCapitalize,
        autoCorrect,
        autoComplete: 'off',
        secureTextEntry: isPassword && !passwordVisible,
        multiline,
        numberOfLines,
        textAlignVertical: multiline ? 'top' : 'center',
        onKeyPress,
        readOnly,
      } as const;

      return (
        <View className="w-full my-3 gap-2">
          {title && <Text className="text-sm text-gray-500">{title}</Text>}
          <View className={inputContainerStyle({ multiline, enable })}>
            {mode === 'default' ? (
              <TextInput
                {...inputProps}
                ref={ref}
              />
            ) : (
              <BottomSheetTextInput
                {...inputProps}
                ref={ref as never}
              />
            )}
            {!isOTP && (
              <View className="flex-row items-center gap-2">
                {customRightComponent}
                {isPassword && (
                  <TouchableOpacity onPress={togglePasswordVisibility}>
                    <MaterialIcons
                      name={passwordVisible ? 'visibility' : 'visibility-off'}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                )}
                {getStatusIcon()}
              </View>
            )}
          </View>
          {/* {isError && errorMessage && enable && !isOTP && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )} */}
          {isError && errorMessage && enable && (
            <Text className="text-sm text-error-700">{errorMessage}</Text>
          )}
        </View>
      );
    };

    if (control && name) {
      return (
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({
            field: {
              onBlur,
              onChange: onChangeController,
              value: valueController,
              disabled,
            },
            fieldState,
          }) => {
            return renderInput({
              onBlur,
              onChange: (text: string) => onChangeController(text),
              value: valueController as string,
              isError: fieldState.invalid && fieldState.isTouched,
              isValid: !fieldState.invalid && fieldState.isTouched,
              errorMessage: fieldState.isTouched
                ? fieldState.error?.message
                : undefined,
              enable: !disabled,
            });
          }}
        />
      );
    }

    return renderInput({
      value: value ?? '',
      onChange,
      isError: isError ?? false,
      errorMessage,
      enable,
      isValid,
    });
  }
);

TextInputField.displayName = 'TextInputField';

export { TextInputField };
