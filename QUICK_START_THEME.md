# 🚀 Quick Start - Theme System

Guía rápida para empezar a usar el Theme System basado en Stitch con **NativeWind/Tailwind CSS**.

## ⚡ Configuración Inicial (2 minutos)

### Paso 1: Verificar NativeWind

Asegúrate de tener NativeWind instalado (ya debería estar):

```bash
npm install nativewind
npm install --save-dev tailwindcss
```

### Paso 2: Verificar global.css

Asegúrate de que `global.css` está importado en `src/app/_layout.tsx`:

```typescript
import '../global.css';
// ... resto de imports
```

### Paso 3: Reiniciar Metro Bundler

```bash
npm start -- --reset-cache
```

¡Listo! Ya puedes usar el theme system.

## 🎨 Uso Rápido

### Opción 1: NativeWind (Más Rápido)

```tsx
import { View, Text } from 'react-native';

function MyScreen() {
  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark p-4">
      <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
        ¡Hola Mundo!
      </Text>
      <Text className="text-base text-slate-600 dark:text-slate-400">
        Esto es un ejemplo con el theme system.
      </Text>
    </View>
  );
}
```

### Opción 2: Tokens (Más Control)

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '@common';

function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    padding: spacing[4],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimaryLight,
  },
});
```

### Opción 3: Combinando ambas

```tsx
import { View, Text } from 'react-native';
import { colors } from '@common';

function MyScreen({ customBg }) {
  return (
    <View
      className="flex-1 p-4"
      style={{ backgroundColor: customBg || colors.backgroundLight }}>
      <Text className="text-2xl font-bold text-slate-900 dark:text-white">
        ¡Hola Mundo!
      </Text>
    </View>
  );
}
```

## 🎯 Componentes Comunes

### Button

```tsx
import { TouchableOpacity, Text } from 'react-native';

function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity
      className="bg-primary py-3 px-6 rounded-lg active:scale-95"
      onPress={onPress}>
      <Text className="text-white text-base font-bold text-center">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
```

### Card

```tsx
import { View } from 'react-native';

function Card({ children }) {
  return (
    <View className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-md">
      {children}
    </View>
  );
}
```

### Input

```tsx
import { TextInput } from 'react-native';

function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white"
      placeholder={placeholder}
      placeholderTextColor="#94a3b8"
      value={value}
      onChangeText={onChangeText}
    />
  );
}
```

## 🌗 Dark Mode

### Dark Mode Automático

NativeWind detecta automáticamente el theme del sistema. Solo usa el prefijo `dark:`:

```tsx
<View className="bg-white dark:bg-surface-dark">
  <Text className="text-slate-900 dark:text-white">
    Cambia automáticamente con el sistema
  </Text>
</View>
```

### Detectar Theme Actual

```tsx
import { useColorScheme } from 'react-native';

function MyComponent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return <Text>Theme actual: {isDark ? 'Oscuro' : 'Claro'}</Text>;
}
```

## 📦 Clases de Tailwind Más Usadas

### Colores

```
bg-primary                    // Fondo azul principal
bg-background-light           // Fondo claro
bg-background-dark            // Fondo oscuro
bg-surface-light              // Surface claro
dark:bg-surface-dark          // Surface oscuro (dark mode)

text-slate-900                // Texto oscuro
dark:text-white               // Texto blanco (dark mode)
text-slate-600                // Texto secundario
dark:text-slate-400           // Texto secundario (dark mode)
```

### Espaciado

```
p-4                           // padding: 16px
px-4 py-3                     // padding horizontal y vertical
m-2                           // margin: 8px
gap-4                         // gap: 16px (flexbox)
```

### Layout

```
flex-1                        // flex: 1
flex-row                      // flexDirection: row
items-center                  // alignItems: center
justify-between               // justifyContent: space-between
rounded-lg                    // borderRadius: 12px
shadow-md                     // sombra media
```

## 🎨 Paleta de Colores

```typescript
Primary:       #136dec   // Azul principal
Background Light: #f6f7f8   // Gris muy claro
Background Dark:  #101822   // Azul oscuro
Surface Dark:     #1e2936   // Gris azulado oscuro
Text Secondary:   #92a9c9   // Gris azulado claro
```

## 🔧 Helper: cn (classnames)

Combina clases condicionalmente:

```tsx
import { cn } from '@common';

function Button({ isActive, isDisabled }) {
  return (
    <TouchableOpacity
      className={cn(
        'py-3 px-6 rounded-lg',
        isActive && 'bg-primary',
        isDisabled && 'opacity-50'
      )}>
      {/* ... */}
    </TouchableOpacity>
  );
}
```

## 📚 Recursos

- **Documentación completa**: `src/features/common/presentation/theme/README.md`
- **Ejemplos**: `src/features/common/presentation/theme/EXAMPLES.md`
- **Setup completo**: `THEME_SYSTEM.md`

## ⚠️ Troubleshooting Rápido

**Error: Cannot find module '@main/theme'**
→ Ejecuta: `npm start -- --reset-cache`

**Dark mode no funciona**
→ Cambia el theme del dispositivo/emulador para probar
→ Verifica que estás usando clases `dark:` correctamente

**Clases no se aplican**
→ Asegúrate de usar `className` en lugar de `class`
→ Verifica que `global.css` está importado
→ Ejecuta: `npm start -- --reset-cache`

## 💡 Tips

1. **Combina NativeWind con inline styles** cuando necesites valores dinámicos:

   ```tsx
   <View
     className="p-4"
     style={{ backgroundColor: dynamicColor }}
   />
   ```

2. **Usa `dark:` prefix** para estilos específicos de dark mode:

   ```tsx
   <Text className="text-slate-900 dark:text-white" />
   ```

3. **Importa desde `@common`** para acceso rápido:
   ```typescript
   import { colors, spacing, cn } from '@common';
   ```

## 🎉 ¡Listo!

Ya puedes empezar a crear componentes hermosos con el theme system.

Para más ejemplos, revisa:

- `THEME_SYSTEM.md` - Setup completo
- `src/features/common/presentation/theme/EXAMPLES.md` - Componentes de ejemplo
- `src/features/common/presentation/theme/README.md` - Documentación detallada
