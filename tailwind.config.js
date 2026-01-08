const { theme } = require('./src/main/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        error: theme.colors.error,
        warning: theme.colors.warning,
        gray: theme.colors.gray,
        background: theme.colors.background,
        text: theme.colors.text,
      },
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
    },
  },
  plugins: [],
};
