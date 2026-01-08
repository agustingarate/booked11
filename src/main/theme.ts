/**
 * Theme configuration for NativeWind/Tailwind CSS.
 * 
 * Este archivo define todos los tokens de diseño utilizados en la aplicación.
 */

export const theme = {
  colors: {
    // Primary - Azul principal de la app
    primary: {
      DEFAULT: '#136dec',
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#136dec', // Color principal
      600: '#1059c9',
      700: '#0d45a6',
      800: '#0a3483',
      900: '#072560',
    },
    
    // Background colors
    background: {
      light: '#f6f7f8',
      dark: '#101822',
    },
    
    // Surface colors (Cards, panels)
    surface: {
      light: '#ffffff',
      dark: {
        DEFAULT: '#1e2936',
        card: '#1a222d',
        toolbar: '#161f2b',
        alt: '#1C2530',
      },
    },
    
    // Border colors
    border: {
      light: '#e5e7eb',
      dark: '#2A3645',
    },
    
    // Text colors
    text: {
      primary: {
        light: '#0f172a',
        dark: '#ffffff',
      },
      secondary: {
        light: '#64748b',
        dark: '#92a9c9',
      },
      tertiary: {
        light: '#94a3b8',
        dark: '#64748b',
      },
    },
    
    // Semantic colors
    success: {
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
    },
    error: {
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
    },
    warning: {
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
    },
    
    // Neutral/Gray scale
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
    
    // Slate scale (para textos y bordes)
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
  
  // Spacing scale
  spacing: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    8: 32,
    10: 40,
    12: 48,
    16: 64,
    20: 80,
    24: 96,
  },
  
  // Border radius siguiendo Stitch
  borderRadius: {
    none: 0,
    sm: 4,        // 0.25rem - DEFAULT
    DEFAULT: 4,   // 0.25rem
    md: 8,        // 0.5rem
    lg: 12,       // 0.75rem - lg
    xl: 16,       // 1rem - 2xl
    '2xl': 16,
    '3xl': 24,
    full: 9999,
  },
  
  // Typography - Lexend como fuente principal
  fontFamily: {
    display: ['Lexend', 'sans-serif'],
    body: ['Noto Sans', 'sans-serif'],
    sans: ['Lexend', 'sans-serif'],
  },
  
  fontSize: {
    xs: 10,     // 0.625rem
    sm: 12,     // 0.75rem
    base: 14,   // 0.875rem
    lg: 16,     // 1rem
    xl: 18,     // 1.125rem
    '2xl': 20,  // 1.25rem
    '3xl': 24,  // 1.5rem
    '4xl': 28,  // 1.75rem
    '5xl': 32,  // 2rem
    '6xl': 36,  // 2.25rem
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
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  // Letter spacing (tracking)
  letterSpacing: {
    tighter: -0.015,  // tracking-[-0.015em]
    tight: -0.01,
    normal: 0,
    wide: 0.025,
    wider: 0.05,
  },
  
  // Shadows para React Native
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
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
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
    xl: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 12,
    },
    '2xl': {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.25,
      shadowRadius: 24,
      elevation: 16,
    },
    // Shadow específica para primary color
    primary: {
      shadowColor: '#136dec',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 8,
    },
  },
  
  // Opacity scale
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
