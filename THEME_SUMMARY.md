# 🎨 Theme System - Resumen Final

Sistema de diseño completo basado en tokens de **Stitch Design System**, configurado para **NativeWind/Tailwind CSS**.

---

## ✅ Archivos Creados

### Configuración
- ✅ `src/main/theme.ts` - Tokens base del sistema
- ✅ `tailwind.config.js` - Configuración de Tailwind actualizada

### Tokens y Utilidades
- ✅ `src/features/common/presentation/theme/tokens.ts` - Tokens para StyleSheet
- ✅ `src/features/common/presentation/theme/index.ts` - Export barrel
- ✅ `src/features/common/utils/cn.ts` - Helper para clases condicionales

### Hooks Personalizados
- ✅ `src/features/common/hooks/useThemeColors.ts` - Hook para colores según theme
- ✅ `src/features/common/hooks/useBreakpoint.ts` - Hook para responsive design

### Documentación
- ✅ `THEME_SYSTEM.md` - Documentación completa
- ✅ `QUICK_START_THEME.md` - Guía rápida (2 minutos)
- ✅ `src/features/common/presentation/theme/README.md` - Guía detallada
- ✅ `src/features/common/presentation/theme/EXAMPLES.md` - Ejemplos prácticos
- ✅ `src/features/common/presentation/theme/TOKENS_REFERENCE.md` - Referencia rápida

---

## 🎨 Tokens Principales

```typescript
// Colores
primary: '#136dec'
backgroundLight: '#f6f7f8'
backgroundDark: '#101822'
surfaceDark: '#1e2936'
textSecondaryDark: '#92a9c9'

// Spacing
spacing[4] = 16px  // Más usado
spacing[2] = 8px
spacing[6] = 24px

// Border Radius
radius.lg = 12px   // Más usado
radius.xl = 16px
radius.full = 9999px

// Typography
font: 'Lexend' (display), 'Noto Sans' (body)
fontSize.base = 14px
fontSize.lg = 16px
```

---

## 🚀 Uso Rápido

### Con NativeWind (Recomendado)

```tsx
<View className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
  <Text className="text-lg font-bold text-slate-900 dark:text-white">
    Hola Mundo
  </Text>
</View>
```

### Con Tokens

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

### Con Hook useThemeColors

```tsx
import { useThemeColors } from '@common';

function MyComponent() {
  const { background, textPrimary, isDark } = useThemeColors();
  
  return (
    <View style={{ backgroundColor: background }}>
      <Text style={{ color: textPrimary }}>Theme: {isDark ? 'Dark' : 'Light'}</Text>
    </View>
  );
}
```

---

## 🌗 Dark Mode

NativeWind detecta automáticamente el theme del sistema:

```tsx
// Automático
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">Texto</Text>
</View>

// Manual con hook
const { isDark, background } = useThemeColors();
```

---

## 📱 Responsive Design

```tsx
import { useBreakpoint, useBreakpoints } from '@common';

// Opción 1: Breakpoint string
const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Opción 2: Helpers booleanos
const { isMobile, isTablet, isDesktop } = useBreakpoints();

// Uso
<View className={isMobile ? 'p-2' : 'p-4'} />
```

---

## 🎯 Componentes Comunes

### Button

```tsx
<TouchableOpacity className="bg-primary py-3 px-6 rounded-lg active:scale-95">
  <Text className="text-white text-base font-bold text-center">
    Botón
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
  placeholder="Escribe aquí..."
  placeholderTextColor="#94a3b8"
/>
```

---

## 📋 Checklist de Uso

- [ ] Leer `QUICK_START_THEME.md` (2 minutos)
- [ ] Verificar que `global.css` está importado en `_layout.tsx`
- [ ] Reiniciar Metro: `npm start -- --reset-cache`
- [ ] Probar dark mode cambiando el theme del dispositivo
- [ ] Importar theme desde `@common`: `import { colors, useThemeColors } from '@common'`
- [ ] Usar clases NativeWind: `className="bg-primary dark:bg-surface-dark"`
- [ ] Revisar ejemplos en `EXAMPLES.md`

---

## 🛠️ Exports Disponibles

```typescript
// Desde @common
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

## 📚 Documentación Completa

1. **`QUICK_START_THEME.md`** → Empieza aquí (2 minutos)
2. **`THEME_SYSTEM.md`** → Setup completo y guía
3. **`src/features/common/presentation/theme/README.md`** → Documentación detallada
4. **`src/features/common/presentation/theme/EXAMPLES.md`** → Ejemplos de componentes
5. **`src/features/common/presentation/theme/TOKENS_REFERENCE.md`** → Referencia rápida

---

## ⚠️ Troubleshooting

**Clases no funcionan**
→ `npm start -- --reset-cache`
→ Verifica que `global.css` está importado

**Dark mode no cambia**
→ Cambia el theme del dispositivo/emulador

**Cannot find module '@main/theme'**
→ Verifica babel.config.js (module-resolver)

---

## 🎉 ¡Listo para Usar!

El theme system está completamente configurado y listo para usar con **NativeWind/Tailwind CSS**. 

**No se requiere Unistyles** - Todo funciona con clases de Tailwind y hooks personalizados.

**Siguiente paso**: Abre `QUICK_START_THEME.md` y empieza a crear componentes hermosos. 🚀
