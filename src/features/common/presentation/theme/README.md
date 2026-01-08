# Theme System - Design Tokens

Design system based on tokens extracted from **Stitch Design System** for use with **NativeWind/Tailwind CSS**.

## 📁 File Structure

```
theme/
├── README.md           # This documentation
├── tokens.ts           # Tokens exported for direct use with StyleSheet
└── ../../main/theme.ts # Base definition of all tokens
```

## 🎨 Color Palette

### Primary Color

- **Main**: `#136dec` (App's characteristic blue)
- Used for CTAs, links, active elements

### Backgrounds

- **Light**: `#f6f7f8` - Main light background
- **Dark**: `#101822` - Main dark background

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

- **Display**: Lexend (main)
- **Body**: Noto Sans (secondary)

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

Predefined shadows for React Native:

```typescript
sm: elevation 2
md: elevation 4
lg: elevation 8
xl: elevation 12
2xl: elevation 16
primary: Shadow with primary color
```

## 🚀 Usage

### Option 1: With NativeWind/Tailwind (Recommended)

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

### Option 2: With Direct Tokens (For dynamic styles)

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

### Combining Both Options

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

## 🎯 Common Styles

The `tokens.ts` file exports reusable common styles:

```typescript
import { commonStyles } from '@common/presentation/theme/tokens';

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

### With NativeWind (Automatic)

NativeWind automatically detects the system theme. Just use the `dark:` prefix:

```tsx
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">Adaptive text</Text>
</View>
```

### With Tokens (Manual)

For cases where you need dynamic values:

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

### Custom Hook

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

// Usage:
const { background, textPrimary } = useThemeColors();
```

## 📱 Responsive Design

For responsive design in React Native, you can use:

### With Dimensions API

```typescript
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const isSmall = width < 380;
const isMedium = width >= 380 && width < 768;
const isLarge = width >= 768;

// Conditional usage
<View className={isSmall ? 'p-2' : 'p-4'} />;
```

### Custom Hook

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

// Usage:
const breakpoint = useBreakpoint();
<View className={breakpoint === 'xs' ? 'p-2' : 'p-4'} />;
```

## 🎨 Example Components

### Card Component

```tsx
import { View, Text } from 'react-native';
import { commonStyles } from '@common/presentation/theme/tokens';

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

## 🔧 Utilities

### getShadow

Gets a predefined shadow:

```typescript
import { getShadow } from '@common/presentation/theme/tokens';

const cardStyle = {
  ...getShadow('md'),
  backgroundColor: 'white',
};
```

### getSpacing

Gets a spacing value as a number:

```typescript
import { getSpacing } from '@common/presentation/theme/tokens';

const margin = getSpacing('md'); // 16
```

## 📚 References

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Stitch Design System](https://stitch.design/)

## 🤝 Contributing

When adding new tokens or modifying existing ones:

1. Update `src/main/theme.ts` with the new values
2. Update `tokens.ts` if necessary
3. Update `tailwind.config.js` to reflect the changes
4. Document the changes in this README
