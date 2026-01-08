/**
 * Theme exports
 * 
 * Punto central de exportación para todos los elementos del theme system.
 */

// Theme base y tipos
export { theme, type Theme } from '@main/theme';

// Tokens individuales para uso directo
export {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  opacity,
  commonStyles,
  getColorByTheme,
  getShadow,
  getSpacing,
} from './tokens';
