/**
 * Design Tokens
 *
 * Design tokens extracted from Stitch Design System.
 * This file provides direct access to design values
 * without needing to import the complete theme.
 *
 * Usage:
 * import { colors, spacing, typography } from '@common/presentation/theme/tokens';
 */

import { theme } from '@main/theme';

// ==================== COLORS ====================

export const colors = {
  // Primary
  primary: theme.colors.primary.DEFAULT,
  primaryLight: theme.colors.primary[100],
  primaryDark: theme.colors.primary[700],

  // Backgrounds
  backgroundLight: theme.colors.background.light,
  backgroundDark: theme.colors.background.dark,

  // Surfaces
  surfaceLight: theme.colors.surface.light,
  surfaceDark: theme.colors.surface.dark.DEFAULT,
  surfaceCard: theme.colors.surface.dark.card,
  surfaceToolbar: theme.colors.surface.dark.toolbar,

  // Borders
  borderLight: theme.colors.border.light,
  borderDark: theme.colors.border.dark,

  // Text
  textPrimaryLight: theme.colors.text.primary.light,
  textPrimaryDark: theme.colors.text.primary.dark,
  textSecondaryLight: theme.colors.text.secondary.light,
  textSecondaryDark: theme.colors.text.secondary.dark,

  // Semantic
  success: theme.colors.success[500],
  error: theme.colors.error[500],
  warning: theme.colors.warning[500],

  // Grays
  gray: theme.colors.gray,
  slate: theme.colors.slate,
} as const;

// ==================== SPACING ====================

export const spacing = {
  ...theme.spacing,
  // Common aliases
  none: theme.spacing[0],
  xs: theme.spacing[1],
  sm: theme.spacing[2],
  md: theme.spacing[4],
  lg: theme.spacing[6],
  xl: theme.spacing[8],
  '2xl': theme.spacing[12],
  '3xl': theme.spacing[16],
} as const;

// ==================== TYPOGRAPHY ====================

export const typography = {
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight,
  lineHeight: theme.lineHeight,
  letterSpacing: theme.letterSpacing,
} as const;

// ==================== BORDER RADIUS ====================

export const radius = {
  ...theme.borderRadius,
  // Aliases
  none: theme.borderRadius.none,
  sm: theme.borderRadius.sm,
  md: theme.borderRadius.md,
  lg: theme.borderRadius.lg,
  xl: theme.borderRadius.xl,
  full: theme.borderRadius.full,
} as const;

// ==================== SHADOWS ====================

export const shadows = theme.shadows;

// ==================== OPACITY ====================

export const opacity = theme.opacity;

// ==================== COMMON STYLES ====================

/**
 * Reusable common styles based on the design system
 */
export const commonStyles = {
  // Cards
  card: {
    borderRadius: radius.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  // Buttons
  button: {
    primary: {
      backgroundColor: colors.primary,
      borderRadius: radius.lg,
      paddingVertical: spacing[3],
      paddingHorizontal: spacing[6],
    },

    secondary: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: radius.lg,
      paddingVertical: spacing[3],
      paddingHorizontal: spacing[6],
    },
  },

  // Input
  input: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[4],
    fontSize: typography.fontSize.base,
  },

  // Floating Action Button
  fab: {
    width: 56,
    height: 56,
    borderRadius: radius['2xl'],
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.primary,
  },

  // Bottom Sheet / Modal
  bottomSheet: {
    borderTopLeftRadius: radius['2xl'],
    borderTopRightRadius: radius['2xl'],
    paddingTop: spacing[2],
    paddingBottom: spacing[8],
    paddingHorizontal: spacing[4],
  },

  // Header/AppBar
  header: {
    paddingTop: spacing[12],
    paddingBottom: spacing[3],
    paddingHorizontal: spacing[4],
    borderBottomWidth: 1,
  },
} as const;

// ==================== UTILITY FUNCTIONS ====================

/**
 * Gets the appropriate color based on theme (light/dark)
 */
export const getColorByTheme = (
  isDark: boolean,
  lightColor: string,
  darkColor: string
) => {
  return isDark ? darkColor : lightColor;
};

/**
 * Generates a shadow style based on elevation
 */
export const getShadow = (
  elevation: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'primary'
) => {
  return shadows[elevation];
};

/**
 * Converts spacing to number (useful for calculations)
 */
export const getSpacing = (key: keyof typeof spacing): number => {
  return spacing[key] as number;
};
