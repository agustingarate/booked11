/**
 * Theme exports
 * 
 * Central export point for all theme system elements.
 */

// Theme base and types
export { theme, type Theme } from '@main/theme';

// Individual tokens for direct use
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
