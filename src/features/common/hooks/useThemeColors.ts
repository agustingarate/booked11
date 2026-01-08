/**
 * useThemeColors Hook
 *
 * Hook personalizado que proporciona acceso fácil a los colores del theme
 * según el modo (light/dark) detectado del sistema.
 *
 * Útil para cuando necesitas valores de color dinámicos en estilos inline.
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

    // Semantic (no cambian)
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
 * Ejemplo de uso:
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
