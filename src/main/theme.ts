/**
 * Theme configuration for NativeWind/Tailwind CSS.
 * Tokens centrales para React Native (sin features web-only).
 */

export const theme = {
  // ===========================================================================
  // COLORES
  // ===========================================================================
  colors: {
    // Marca principal
    primary: {
      DEFAULT: '#136dec',
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#136dec',
      600: '#1059c9',
      700: '#0d45a6',
      800: '#0a3483',
      900: '#072560',
      950: '#041633',
    },
    // Color secundario para acentos
    secondary: {
      DEFAULT: '#7c3aed',
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#7c3aed',
      600: '#6d28d9',
      700: '#5b21b6',
      800: '#4c1d95',
      900: '#3b0f73',
      950: '#2a0757',
    },
    // Estados
    success: {
      DEFAULT: '#22c55e',
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      foreground: '#ffffff',
    },
    warning: {
      DEFAULT: '#f59e0b',
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      foreground: '#1f2937',
    },
    error: {
      DEFAULT: '#ef4444',
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      foreground: '#ffffff',
    },
    info: {
      DEFAULT: '#3b82f6',
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
      foreground: '#ffffff',
    },
    disabled: {
      DEFAULT: '#e5e7eb',
      foreground: '#94a3b8',
    },

    // Fondos y superficies
    background: {
      DEFAULT: '#ffffff',
      muted: '#f7f9fc',
      elevated: '#f2f4f7',
      dark: '#0f172a',
    },
    surface: {
      DEFAULT: '#ffffff',
      muted: '#f8fafc',
      contrast: '#0f172a',
      dark: '#1b2533',
      overlay: 'rgba(0,0,0,0.6)',
    },
    border: {
      DEFAULT: '#e2e8f0',
      strong: '#cbd5e1',
      muted: '#e5e7eb',
      dark: '#2A3645',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#64748b',
      inverse: '#ffffff',
      onPrimary: '#ffffff',
      onSurface: '#0f172a',
    },
    ring: {
      DEFAULT: '#136dec',
      focus: '#93c5fd',
    },

    // Escalas neutras
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },

  // ===========================================================================
  // ESPACIADO Y RADIOS
  // ===========================================================================
  spacing: {
    0: 0,
    0.5: 2,
    1: 4,
    1.5: 6,
    2: 8,
    2.5: 10,
    3: 12,
    3.5: 14,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
  },

  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    DEFAULT: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    '3xl': 24,
    full: 9999,
  },

  // ===========================================================================
  // TIPOGRAFÍA
  // ===========================================================================
  fontFamily: {
    // Semánticas principales
    display: ['Lexend-Regular', 'Lexend', 'sans-serif'],
    sans: ['Lexend-Regular', 'Lexend', 'sans-serif'],
    body: ['NotoSans-Regular', 'Noto Sans', 'sans-serif'],
    mono: ['SFMono-Regular', 'Menlo', 'monospace'],

    // Pesos explícitos (usar fontFamily en lugar de fontWeight)
    lexend: ['Lexend-Regular'],
    'lexend-medium': ['Lexend-Medium'],
    'lexend-semibold': ['Lexend-SemiBold'],
    'lexend-bold': ['Lexend-Bold'],
    'lexend-black': ['Lexend-Black'],
    'noto-regular': ['NotoSans-Regular'],
    'noto-medium': ['NotoSans-Medium'],
    'noto-semibold': ['NotoSans-SemiBold'],
    'noto-bold': ['NotoSans-Bold'],
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 40,
    '7xl': 48,
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeight: {
    tight: 1.15,
    snug: 1.25,
    normal: 1.4,
    relaxed: 1.6,
  },

  letterSpacing: {
    tighter: -0.02,
    tight: -0.01,
    normal: 0,
    wide: 0.02,
    wider: 0.04,
  },

  // ===========================================================================
  // EFECTOS
  // ===========================================================================
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.06,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.14,
      shadowRadius: 8,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.18,
      shadowRadius: 16,
      elevation: 12,
    },
    '2xl': {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.22,
      shadowRadius: 24,
      elevation: 16,
    },
    primary: {
      shadowColor: '#136dec',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 8,
    },
  },

  opacity: {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
  },
} as const;

export type Theme = typeof theme;
