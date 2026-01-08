# Theme System - Design Tokens

Sistema de diseño basado en los tokens extraídos de **Stitch Design System** para usar con **NativeWind/Tailwind CSS**.

## 📁 Estructura de Archivos

```
theme/
├── README.md           # Esta documentación
├── tokens.ts           # Tokens exportados para uso directo con StyleSheet
└── ../../main/theme.ts # Definición base de todos los tokens
```

## 🎨 Paleta de Colores

### Primary Color

- **Principal**: `#136dec` (Azul característico de la app)
- Usado para CTAs, enlaces, elementos activos

### Backgrounds

- **Light**: `#f6f7f8` - Fondo claro principal
- **Dark**: `#101822` - Fondo oscuro principal

### Surfaces (Cards, Panels)

- **Light**: `#ffffff`
- **Dark**:
  - Default: `#1e2936`
  - Card: `#1a222d`
  - Toolbar: `#161f2b`
  - Alt: `#1C2530`

### Text Colors

- **Primary Light**: `#0f172a`
- **Primary Dark**: `#ffffff`
- **Secondary Light**: `#64748b`
- **Secondary Dark**: `#92a9c9`

## 📏 Spacing Scale

```typescript
0: 0px
1: 4px
2: 8px
3: 12px
4: 16px
5: 20px
6: 24px
8: 32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
```

## 🔤 Typography

### Font Family

- **Display**: Lexend (principal)
- **Body**: Noto Sans (secundaria)

### Font Sizes

```typescript
xs: 10px
sm: 12px
base: 14px
lg: 16px
xl: 18px
2xl: 20px
3xl: 24px
4xl: 28px
5xl: 32px
6xl: 36px
```

### Font Weights

```typescript
light: 300;
normal: 400;
medium: 500;
semibold: 600;
bold: 700;
extrabold: 800;
```

## 📐 Border Radius

```typescript
none: 0
sm: 4px (0.25rem) - DEFAULT
md: 8px (0.5rem)
lg: 12px (0.75rem)
xl: 16px (1rem)
2xl: 16px
3xl: 24px
full: 9999px
```

## 💫 Shadows

Sombras predefinidas para React Native:

```typescript
sm: elevation 2
md: elevation 4
lg: elevation 8
xl: elevation 12
2xl: elevation 16
primary: Sombra con color primary
```

## 🚀 Uso

### Opción 1: Con NativeWind/Tailwind (Recomendado)

```tsx
import { View, Text } from 'react-native';

export const MyComponent = () => {
  return (
    <View className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
      <Text className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">
        Hello World
      </Text>
    </View>
  );
};
```

### Opción 2: Con Tokens directos (Para estilos dinámicos)

```typescript
import {
  colors,
  spacing,
  typography,
  radius,
} from '@common/presentation/theme/tokens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    padding: spacing.md,
    borderRadius: radius.lg,
  },
  text: {
    color: colors.textPrimaryLight,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
});
```

### Combinar ambas opciones

```tsx
import { View, Text } from 'react-native';
import { colors } from '@common/presentation/theme/tokens';

export const MyComponent = ({ backgroundColor }) => {
  return (
    <View
      className="p-4 rounded-lg"
      style={{ backgroundColor: backgroundColor || colors.backgroundLight }}>
      <Text className="text-lg font-bold text-slate-900 dark:text-white">
        Hello World
      </Text>
    </View>
  );
};
```

## 🎯 Estilos Comunes

El archivo `tokens.ts` exporta estilos comunes reutilizables:

```typescript
import { commonStyles } from '@/features/common/presentation/theme/tokens';

// Card
<View style={commonStyles.card}>
  {/* content */}
</View>

// Button Primary
<TouchableOpacity style={commonStyles.button.primary}>
  <Text>Click me</Text>
</TouchableOpacity>

// FAB (Floating Action Button)
<TouchableOpacity style={commonStyles.fab}>
  <Icon name="add" />
</TouchableOpacity>
```

## 🌗 Dark Mode

### Con NativeWind (Automático)

NativeWind detecta automáticamente el theme del sistema. Solo usa el prefijo `dark:`:

```tsx
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">Texto adaptable</Text>
</View>
```

### Con Tokens (Manual)

Para casos donde necesites valores dinámicos:

```typescript
import { getColorByTheme } from '@common/presentation/theme/tokens';
import { useColorScheme } from 'react-native';

function MyComponent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const backgroundColor = getColorByTheme(
    isDark,
    colors.backgroundLight,
    colors.backgroundDark
  );

  return <View style={{ backgroundColor }} />;
}
```

### Hook personalizado

```typescript
import { useColorScheme } from 'react-native';
import { colors } from '@common/presentation/theme/tokens';

export function useThemeColors() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    isDark,
    background: isDark ? colors.backgroundDark : colors.backgroundLight,
    surface: isDark ? colors.surfaceDark : colors.surfaceLight,
    textPrimary: isDark ? colors.textPrimaryDark : colors.textPrimaryLight,
    textSecondary: isDark
      ? colors.textSecondaryDark
      : colors.textSecondaryLight,
  };
}

// Uso:
const { background, textPrimary } = useThemeColors();
```

## 📱 Responsive Design

Para diseño responsive en React Native, puedes usar:

### Con Dimensions API

```typescript
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const isSmall = width < 380;
const isMedium = width >= 380 && width < 768;
const isLarge = width >= 768;

// Uso condicional
<View className={isSmall ? 'p-2' : 'p-4'} />;
```

### Hook personalizado

```typescript
import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('xs');

  useEffect(() => {
    const updateBreakpoint = () => {
      const { width } = Dimensions.get('window');
      if (width >= 1280) setBreakpoint('xl');
      else if (width >= 1024) setBreakpoint('lg');
      else if (width >= 768) setBreakpoint('md');
      else if (width >= 380) setBreakpoint('sm');
      else setBreakpoint('xs');
    };

    updateBreakpoint();
    const subscription = Dimensions.addEventListener(
      'change',
      updateBreakpoint
    );
    return () => subscription.remove();
  }, []);

  return breakpoint;
}

// Uso:
const breakpoint = useBreakpoint();
<View className={breakpoint === 'xs' ? 'p-2' : 'p-4'} />;
```

## 🎨 Componentes de Ejemplo

### Card Component

```tsx
import { View, Text } from 'react-native';
import { commonStyles } from '@/features/common/presentation/theme/tokens';

export const Card = ({ children }) => {
  return (
    <View className="bg-white dark:bg-surface-dark rounded-lg p-4 shadow-md">
      {children}
    </View>
  );
};
```

### Button Component

```tsx
import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-primary rounded-lg py-3 px-6 active:scale-95"
      onPress={onPress}>
      <Text className="text-white text-base font-bold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
```

## 🔧 Utilidades

### getShadow

Obtiene una sombra predefinida:

```typescript
import { getShadow } from '@/features/common/presentation/theme/tokens';

const cardStyle = {
  ...getShadow('md'),
  backgroundColor: 'white',
};
```

### getSpacing

Obtiene un valor de spacing como número:

```typescript
import { getSpacing } from '@/features/common/presentation/theme/tokens';

const margin = getSpacing('md'); // 16
```

## 📚 Referencias

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Stitch Design System](https://stitch.design/)

## 🤝 Contribuir

Al agregar nuevos tokens o modificar existentes:

1. Actualiza `src/main/theme.ts` con los nuevos valores
2. Actualiza `tokens.ts` si es necesario
3. Actualiza `tailwind.config.js` para reflejar los cambios
4. Documenta los cambios en este README
