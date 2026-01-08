/**
 * useThemeColors Hook
 *
 * Custom hook that provides easy access to theme colors
 * based on the system's detected mode (light/dark).
 *
 * Useful when you need dynamic color values in inline styles.
 */

import { useColorScheme } from 'react-native';

import { colors } from '@common/presentation/theme/tokens';

export function useThemeColors() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    // Backgrounds
    background: isDark ? colors.backgroundDark : colors.backgroundLight,
    surface: isDark ? colors.surfaceDark : colors.surfaceLight,
    surfaceElevated: isDark ? colors.surfaceCard : colors.surfaceLight,

    // Text
    textPrimary: isDark ? colors.textPrimaryDark : colors.textPrimaryLight,
    textSecondary: isDark
      ? colors.textSecondaryDark
      : colors.textSecondaryLight,

    // Borders
    border: isDark ? colors.borderDark : colors.borderLight,

    // Semantic (don't change)
    primary: colors.primary,
    success: colors.success,
    error: colors.error,
    warning: colors.warning,

    // Helpers
    gray: colors.gray,
    slate: colors.slate,
  };
}

/**
 * Usage example:
 *
 * ```tsx
 * import { useThemeColors } from '@common/hooks/useThemeColors';
 *
 * function MyComponent() {
 *   const { background, textPrimary, primary } = useThemeColors();
 *
 *   return (
 *     <View style={{ backgroundColor: background }}>
 *       <Text style={{ color: textPrimary }}>Hello</Text>
 *       <View style={{ backgroundColor: primary }} />
 *     </View>
 *   );
 * }
 * ```
 */
