const { theme } = require('./src/main/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      // Colors from Stitch Design System
      colors: {
        primary: theme.colors.primary,
        background: theme.colors.background,
        surface: theme.colors.surface,
        border: theme.colors.border,
        text: theme.colors.text,
        success: theme.colors.success,
        error: theme.colors.error,
        warning: theme.colors.warning,
        gray: theme.colors.gray,
        slate: theme.colors.slate,
      },

      // Typography
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      letterSpacing: theme.letterSpacing,

      // Layout
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,

      // Effects
      opacity: theme.opacity,

      // Custom shadows for web (Tailwind)
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        primary: '0 4px 20px -2px rgba(19, 109, 236, 0.25)',
        'primary-lg': '0 10px 40px -3px rgba(19, 109, 236, 0.3)',
      },

      // Backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
