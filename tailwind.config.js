const { theme } = require('./src/main/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      // Paleta semántica
      colors: {
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
        ring: theme.colors.ring,
        gray: theme.colors.gray,
        slate: theme.colors.slate,
      },

      // Tipografía (usar fontFamily por peso, sin fontWeight)
      fontFamily: {
        display: theme.fontFamily.display,
        sans: theme.fontFamily.sans,
        body: theme.fontFamily.body,
        mono: theme.fontFamily.mono,
        lexend: theme.fontFamily.lexend,
        'lexend-medium': theme.fontFamily['lexend-medium'],
        'lexend-semibold': theme.fontFamily['lexend-semibold'],
        'lexend-bold': theme.fontFamily['lexend-bold'],
        'lexend-black': theme.fontFamily['lexend-black'],
        'noto-regular': theme.fontFamily['noto-regular'],
        'noto-medium': theme.fontFamily['noto-medium'],
        'noto-semibold': theme.fontFamily['noto-semibold'],
        'noto-bold': theme.fontFamily['noto-bold'],
      },
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      letterSpacing: theme.letterSpacing,

      // Layout
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,

      // Efectos compatibles con RN
      opacity: theme.opacity,
    },
  },
  plugins: [require('./tailwind.typography.plugin')],
};
