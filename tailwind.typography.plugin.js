const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  // Prefijo "typo-" evita conflictos con el grupo text-* de NativeWind (color).
  addComponents({
    '.typo-display-1': {
      fontFamily: 'Lexend-Black',
      fontSize: theme('fontSize.7xl'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tighter'),
    },
    '.typo-display-2': {
      fontFamily: 'Lexend-Bold',
      fontSize: theme('fontSize.6xl'),
      lineHeight: theme('lineHeight.tight'),
      letterSpacing: theme('letterSpacing.tight'),
    },
    '.typo-title-lg': {
      fontFamily: 'Lexend-Bold',
      fontSize: theme('fontSize.4xl'),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.tight'),
    },
    '.typo-title-md': {
      fontFamily: 'Lexend-SemiBold',
      fontSize: theme('fontSize.3xl'),
      lineHeight: theme('lineHeight.snug'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-title-sm': {
      fontFamily: 'Lexend-SemiBold',
      fontSize: theme('fontSize.2xl'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-subtitle': {
      fontFamily: 'Lexend-Medium',
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-body-lg': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.relaxed'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-body': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-body-sm': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-body-xs': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-label-lg': {
      fontFamily: 'NotoSans-Medium',
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-label': {
      fontFamily: 'NotoSans-Medium',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-label-sm': {
      fontFamily: 'NotoSans-Medium',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-caption': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-overline': {
      fontFamily: 'NotoSans-SemiBold',
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
      textTransform: 'uppercase',
    },
    '.typo-button-lg': {
      fontFamily: 'Lexend-SemiBold',
      fontSize: theme('fontSize.lg'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-button': {
      fontFamily: 'Lexend-SemiBold',
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-button-sm': {
      fontFamily: 'Lexend-Medium',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.wide'),
    },
    '.typo-lead': {
      fontFamily: 'NotoSans-Medium',
      fontSize: theme('fontSize.xl'),
      lineHeight: theme('lineHeight.relaxed'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-muted': {
      fontFamily: 'NotoSans-Regular',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
      color: theme('colors.text.muted'),
    },
    '.typo-inverse': {
      fontFamily: 'Lexend-SemiBold',
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
      color: theme('colors.text.inverse'),
    },
    '.typo-code': {
      fontFamily: theme('fontFamily.mono'),
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-code-lg': {
      fontFamily: theme('fontFamily.mono'),
      fontSize: theme('fontSize.base'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.normal'),
    },
    '.typo-text-input': {
      fontFamily: 'Lexend-Regular',
      fontSize: theme('fontSize.md'),
      lineHeight: theme('lineHeight.normal'),
      letterSpacing: theme('letterSpacing.tight'),
    },
  });
});
