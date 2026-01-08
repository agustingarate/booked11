import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import type { PressableProps } from 'react-native';
import { Pressable, Text, View } from 'react-native';

import { cn } from '@common/utils/cn';

export enum ButtonRadius {
  ROUNDED = 'rounded',
  FULL = 'full',
}

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  text?: string;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
  rightIcon?: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonVariant;
  radius?: ButtonRadius;
  iconSize?: number;
  iconColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  leftIcon,
  rightIcon,
  variant = 'primary',
  radius = ButtonRadius.ROUNDED,
  iconSize = 20,
  iconColor,
  disabled = false,
  isLoading = false,
  className,
  textClassName,
  onPress,
  ...pressableProps
}) => {
  if (!text && !leftIcon && !rightIcon) {
    console.warn('Button: Debe proporcionar al menos texto o un icono');
  }

  const hasOnlyIcons = !text && (leftIcon ?? rightIcon);

  const radiusClasses = {
    [ButtonRadius.ROUNDED]: 'rounded-lg',
    [ButtonRadius.FULL]: 'rounded-full',
  };

  return (
    <Pressable
      className={cn(
        cn(
          'flex-row items-center justify-center ',
          hasOnlyIcons ? 'p-3' : 'py-3 px-6',
          'active:scale-[0.98]',
          'active:opacity-85',
          disabled && 'opacity-50',
          isLoading && 'opacity-70'
        ),
        {
          primary: 'bg-primary',
          secondary: 'bg-[#253040]',
        }[variant],
        radiusClasses[radius],
        className
      )}
      onPress={onPress}
      disabled={Boolean(disabled) || isLoading}
      {...pressableProps}>
      {leftIcon && (
        <View className={text ? 'mr-2' : ''}>
          <MaterialIcons
            name={leftIcon}
            size={iconSize}
            color={iconColor ?? '#ffffff'}
          />
        </View>
      )}

      {text && (
        <Text
          className={cn(
            'text-base font-lexend-semibold',
            {
              primary: 'text-white',
              secondary: 'text-white',
            }[variant],
            textClassName
          )}>
          {text}
        </Text>
      )}

      {rightIcon && (
        <View className={text ? 'ml-2' : ''}>
          <MaterialIcons
            name={rightIcon}
            size={iconSize}
            color={iconColor ?? '#ffffff'}
          />
        </View>
      )}
    </Pressable>
  );
};
