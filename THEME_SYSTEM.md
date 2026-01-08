# 🎨 Theme System - Stitch Design Tokens

Sistema de diseño completo generado a partir de los tokens de Stitch, configurado para **NativeWind/Tailwind CSS**.

## 📦 Archivos Generados

### Configuración Principal

1. **`src/main/theme.ts`**

   - Definición base de todos los tokens de diseño
   - Colors, spacing, typography, border radius, shadows, etc.
   - Exporta el objeto `theme` y el tipo `Theme`

2. **`tailwind.config.js`**
   - Configuración de Tailwind CSS para NativeWind
   - Extiende el theme base con los tokens de Stitch
   - Incluye dark mode, shadows personalizadas, backdrop blur

### Theme Tokens

3. **`src/features/common/presentation/theme/tokens.ts`**

   - Exporta tokens individuales para uso directo con StyleSheet
   - Incluye `commonStyles` con estilos reutilizables
   - Funciones helper: `getColorByTheme`, `getShadow`, `getSpacing`

4. **`src/features/common/presentation/theme/index.ts`**
   - Export barrel para facilitar imports
   - Punto central de exportación del theme system

### Utilidades

5. **`src/features/common/utils/cn.ts`**
   - Helper para combinar clases condicionales de NativeWind
   - Similar a `clsx` o `classnames`

### Documentación

6. **`src/features/common/presentation/theme/README.md`**

   - Documentación completa del sistema
   - Guía de uso con ejemplos
   - Referencia de tokens

7. **`src/features/common/presentation/theme/EXAMPLES.md`**

   - Ejemplos prácticos de componentes
   - Casos de uso reales basados en Stitch
   - Patterns y best practices

8. **`src/features/common/presentation/theme/TOKENS_REFERENCE.md`**
   - Referencia rápida de todos los tokens disponibles
   - Tablas con valores y usos

## 🚀 Setup e Instalación

### 1. Verificar dependencias

Asegúrate de tener NativeWind instalado:

```bash
npm install nativewind
npm install --save-dev tailwindcss
```

### 2. Configurar babel.config.js

Asegúrate de que los module-resolver aliases estén configurados:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/app',
            '@main': './src/main',
            '@common': './src/features/common',
            '@features': './src/features',
            // ... otros aliases
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
```

### 3. Configurar global.css

Asegúrate de que `global.css` está importado en tu app:

```typescript
// En src/app/_layout.tsx
import '../global.css';
```

### 4. Reiniciar Metro Bundler

```bash
npm start -- --reset-cache
```

## 🎨 Tokens de Diseño Principales

### Colores

```typescript
// Primary
primary: '#136dec';

// Backgrounds
backgroundLight: '#f6f7f8';
backgroundDark: '#101822';

// Surfaces
surfaceLight: '#ffffff';
surfaceDark: '#1e2936';
surfaceCard: '#1a222d';
surfaceToolbar: '#161f2b';

// Text
textPrimaryLight: '#0f172a';
textPrimaryDark: '#ffffff';
textSecondaryLight: '#64748b';
textSecondaryDark: '#92a9c9';
```

### Espaciado

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
```

### Tipografía

```typescript
// Font Family
display: ['Lexend', 'sans-serif']
body: ['Noto Sans', 'sans-serif']

// Font Sizes
xs: 10px
sm: 12px
base: 14px
lg: 16px
xl: 18px
2xl: 20px
3xl: 24px
```

### Border Radius

```typescript
sm: 4px   // DEFAULT
md: 8px
lg: 12px
xl: 16px
full: 9999px
```

## 💡 Formas de Uso

### 1️⃣ Con NativeWind (Recomendado)

```tsx
<View className="bg-background-light dark:bg-background-dark p-4 rounded-lg">
  <Text className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold">
    Hello World
  </Text>
</View>
```

### 2️⃣ Con Tokens directos (Para estilos dinámicos)

```tsx
import { colors, spacing, radius } from '@common/presentation/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundLight,
    padding: spacing[4],
    borderRadius: radius.lg,
  },
});
```

### 3️⃣ Combinando ambas

```tsx
import { View, Text } from 'react-native';
import { colors } from '@common/presentation/theme';

function MyComponent({ backgroundColor }) {
  return (
    <View
      className="p-4 rounded-lg"
      style={{ backgroundColor: backgroundColor || colors.backgroundLight }}>
      <Text className="text-lg font-bold text-slate-900 dark:text-white">
        Hello World
      </Text>
    </View>
  );
}
```

## 🌗 Dark Mode

El sistema soporta dark mode de dos formas:

1. **Automático con NativeWind**: Usa clases `dark:` y detecta el theme del sistema automáticamente
2. **Manual con Tokens**: Usa `useColorScheme()` y `getColorByTheme()` para valores dinámicos

```tsx
// Opción 1: NativeWind (automático)
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">Texto</Text>
</View>;

// Opción 2: Manual
import { useColorScheme } from 'react-native';
import { getColorByTheme, colors } from '@common/presentation/theme';

const colorScheme = useColorScheme();
const isDark = colorScheme === 'dark';
const bg = getColorByTheme(
  isDark,
  colors.backgroundLight,
  colors.backgroundDark
);
```

## 📱 Componentes de Ejemplo

Ver `src/features/common/presentation/theme/EXAMPLES.md` para:

- Card components
- Buttons (primary, secondary, outline)
- Document cards (basados en Stitch)
- PDF reader header
- Bottom navigation
- Theme switcher
- Responsive grids

## 🎯 Common Styles

Estilos predefinidos listos para usar:

```tsx
import { commonStyles } from '@common/presentation/theme';

// Card
<View style={commonStyles.card} />

// Button Primary
<TouchableOpacity style={commonStyles.button.primary} />

// FAB (Floating Action Button)
<TouchableOpacity style={commonStyles.fab} />

// Input
<TextInput style={commonStyles.input} />

// Bottom Sheet
<View style={commonStyles.bottomSheet} />
```

## 📖 Documentación Completa

- **README**: `src/features/common/presentation/theme/README.md`
- **Ejemplos**: `src/features/common/presentation/theme/EXAMPLES.md`
- **Tokens**: Ver directamente en `src/main/theme.ts`

## 🔄 Migración de Código Existente

### Antes (sin theme system):

```tsx
<View style={{ backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8 }}>
  <Text style={{ color: '#333', fontSize: 16 }}>Hello</Text>
</View>
```

### Después (con NativeWind):

```tsx
<View className="bg-background-light p-4 rounded-lg">
  <Text className="text-slate-900 text-lg">Hello</Text>
</View>
```

### Después (con tokens):

```tsx
import { colors, spacing, radius } from '@common/presentation/theme';

<View
  style={{
    backgroundColor: colors.backgroundLight,
    padding: spacing[4],
    borderRadius: radius.lg,
  }}>
  <Text style={{ color: colors.textPrimaryLight, fontSize: 16 }}>Hello</Text>
</View>;
```

## ✅ Checklist de Integración

- [ ] Verificar que NativeWind está instalado
- [ ] Verificar que `global.css` está importado en `_layout.tsx`
- [ ] Verificar que babel.config.js tiene los aliases configurados
- [ ] Reiniciar Metro con `--reset-cache`
- [ ] Probar dark mode
- [ ] Migrar componentes existentes progresivamente
- [ ] Revisar ejemplos en EXAMPLES.md

## 🆘 Troubleshooting

### Error: Cannot find module '@main/theme'

→ Verifica que babel-plugin-module-resolver está configurado correctamente en babel.config.js

### Clases de Tailwind no funcionan

→ Ejecuta `npm start -- --reset-cache` para limpiar la caché de Metro
→ Verifica que `global.css` está importado en tu `_layout.tsx`

### Dark mode no cambia

→ NativeWind detecta automáticamente el theme del sistema. Cambia el theme del dispositivo/emulador para probarlo
→ Si necesitas cambiar el theme manualmente desde la app, usa tokens con `useColorScheme()`

### Los colores no se ven correctos

→ Verifica que estás usando las clases correctas: `dark:bg-background-dark` en lugar de solo `bg-background-dark`

## 📚 Referencias

- [NativeWind Docs](https://www.nativewind.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Stitch Design](https://stitch.design/)
- [React Native useColorScheme](https://reactnative.dev/docs/usecolorscheme)

---

**Generado a partir de los Design Tokens de Stitch** 🎨
