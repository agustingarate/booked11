# 🎨 Theme System - Complete Documentation

Complete theme system based on **Stitch Design System** tokens, configured for **NativeWind/Tailwind CSS**.

---

## 📦 Generated Files

### Main Configuration
- ✅ `src/main/theme.ts` - Base design tokens
- ✅ `tailwind.config.js` - Updated Tailwind configuration

### Tokens and Utilities
- ✅ `src/features/common/presentation/theme/tokens.ts` - Tokens for StyleSheet
- ✅ `src/features/common/presentation/theme/index.ts` - Export barrel
- ✅ `src/features/common/utils/cn.ts` - Helper for conditional classes

### Custom Hooks
- ✅ `src/features/common/hooks/useThemeColors.ts` - Hook for theme-based colors
- ✅ `src/features/common/hooks/useBreakpoint.ts` - Hook for responsive design

###Documentation
- ✅ `THEME_README.md` - Complete guide (this file)
- ✅ `src/features/common/presentation/theme/README.md` - Detailed guide
- ✅ `src/features/common/presentation/theme/EXAMPLES.md` - Practical examples
- ✅ `src/features/common/presentation/theme/TOKENS_REFERENCE.md` - Quick reference

---

## 🎨 Main Tokens

```typescript
// Colors
primary: '#136dec'
backgroundLight: '#f6f7f8'
backgroundDark: '#101822'
surfaceDark: '#1e2936'
textSecondaryDark: '#92a9c9'

// Spacing
spacing[4] = 16px  // Most used
spacing[2] = 8px
spacing[6] = 24px

// Border Radius
radius.lg = 12px   // Most used
radius.xl = 16px
radius.full = 9999px

// Typography
font: 'Lexend' (display), 'Noto Sans' (body)
fontSize.base = 14px
fontSize.lg = 16px
```

---

## 🚀 Quick Usage

### With NativeWind (Recommended)

```tsx
<View className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
  <Text className="text-lg font-bold text-slate-900 dark:text-white">
    Hello World
  </Text>
</View>
```

### With Tokens

```tsx
import { colors, spacing, radius } from '@common';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    padding: spacing[4],
    borderRadius: radius.lg,
  },
});
```

### With useThemeColors Hook

```tsx
import { useThemeColors } from '@common';

function MyComponent() {
  const { background, textPrimary, isDark } = useThemeColors();
  
  return (
    <View style={{ backgroundColor: background }}>
      <Text style={{ color: textPrimary }}>
        Theme: {isDark ? 'Dark' : 'Light'}
      </Text>
    </View>
  );
}
```

---

## 🌗 Dark Mode

NativeWind automatically detects the system theme:

```tsx
// Automatic
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">Text</Text>
</View>

// Manual with hook
const { isDark, background } = useThemeColors();
```

---

## 📱 Responsive Design

```tsx
import { useBreakpoint, useBreakpoints } from '@common';

// Option 1: Breakpoint string
const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Option 2: Boolean helpers
const { isMobile, isTablet, isDesktop } = useBreakpoints();

// Usage
<View className={isMobile ? 'p-2' : 'p-4'} />
```

---

## 🎯 Common Components

### Button

```tsx
<TouchableOpacity className="bg-primary py-3 px-6 rounded-lg active:scale-95">
  <Text className="text-white text-base font-bold text-center">
    Button
  </Text>
</TouchableOpacity>
```

### Card

```tsx
<View className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-md">
  {children}
</View>
```

### Input

```tsx
<TextInput
  className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white"
  placeholder="Type here..."
  placeholderTextColor="#94a3b8"
/>
```

---

## 📋 Usage Checklist

- [ ] Verify that `global.css` is imported in `_layout.tsx`
- [ ] Restart Metro: `npm start -- --reset-cache`
- [ ] Test dark mode by changing device theme
- [ ] Import theme from `@common`: `import { colors, useThemeColors } from '@common'`
- [ ] Use NativeWind classes: `className="bg-primary dark:bg-surface-dark"`
- [ ] Review examples in `EXAMPLES.md`

---

## 🛠️ Available Exports

```typescript
// From @common
import {
  // Tokens
  colors,
  spacing,
  typography,
  radius,
  shadows,
  opacity,
  commonStyles,
  
  // Helpers
  cn,
  cnx,
  getColorByTheme,
  getShadow,
  getSpacing,
  
  // Hooks
  useThemeColors,
  useBreakpoint,
  useBreakpoints,
  useScreenWidth,
  
  // Types
  Theme,
  Breakpoint,
} from '@common';
```

---

## ⚠️ Troubleshooting

**Classes don't work**
→ `npm start -- --reset-cache`
→ Verify that `global.css` is imported

**Dark mode doesn't change**
→ Change device/emulator theme

**Cannot find module '@main/theme'**
→ Check babel.config.js (module-resolver)

---

## 📚 Complete Documentation

1. **`THEME_README.md`** ← This file (executive summary)
2. **`src/features/common/presentation/theme/README.md`** ← Detailed guide
3. **`src/features/common/presentation/theme/EXAMPLES.md`** ← Component examples
4. **`src/features/common/presentation/theme/TOKENS_REFERENCE.md`** ← Quick reference

---

## 🎉 Ready to Use!

The theme system is fully configured and ready to use with **NativeWind/Tailwind CSS**. 

**Unistyles not required** - Everything works with Tailwind classes and custom hooks.

**Next step**: Start building beautiful components! 🚀

---

**Generated from Stitch Design System Tokens** 🎨
