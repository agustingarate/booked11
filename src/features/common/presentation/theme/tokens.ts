/**
 * Design Tokens (centrales y compatibles con React Native)
 */

import { theme } from '@main/theme';

// ==================== COLORES ====================
export const colors = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  success: theme.colors.success,
  warning: theme.colors.warning,
  error: theme.colors.error,
  info: theme.colors.info,
  disabled: theme.colors.disabled,
  background: theme.colors.background,
  surface: theme.colors.surface,
  border: theme.colors.border,
  text: theme.colors.text,
  gray: theme.colors.gray,
  slate: theme.colors.slate,
} as const;

// ==================== ESPACIADO ====================
export const spacing = {
  ...theme.spacing,
  none: theme.spacing[0],
  xs: theme.spacing[1],
  sm: theme.spacing[2],
  md: theme.spacing[4],
  lg: theme.spacing[6],
  xl: theme.spacing[8],
  '2xl': theme.spacing[12],
  '3xl': theme.spacing[16],
} as const;

// ==================== TIPOGRAFÍA ====================
export const typography = {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight,
  lineHeight: theme.lineHeight,
  letterSpacing: theme.letterSpacing,
} as const;

// ==================== RADIOS ====================
export const radius = {
  ...theme.borderRadius,
  none: theme.borderRadius.none,
  sm: theme.borderRadius.sm,
  md: theme.borderRadius.md,
  lg: theme.borderRadius.lg,
  xl: theme.borderRadius.xl,
  full: theme.borderRadius.full,
} as const;

// ==================== SOMBRAS Y OPACIDAD ====================
export const shadows = theme.shadows;
export const opacity = theme.opacity;

// ==================== PRESETS BÁSICOS ====================

// ==================== UTILIDADES ====================
export const getColorByTheme = (
  isDark: boolean,
  lightColor: string,
  darkColor: string
) => (isDark ? darkColor : lightColor);

export const getShadow = (elevation: keyof typeof shadows) =>
  shadows[elevation];

export const getSpacing = (key: keyof typeof spacing): number =>
  spacing[key] as number;

export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  opacity,
};
