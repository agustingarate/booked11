# Diseño Responsive

Esta guía documenta las herramientas y utilidades disponibles para crear interfaces responsive en la aplicación.

## Hooks de Breakpoint

El proyecto incluye un conjunto de hooks para crear interfaces responsive basadas en el tamaño de la pantalla.

### Ubicación

```
src/features/common/hooks/useBreakpoint.ts
```

### Breakpoints

El sistema utiliza los siguientes breakpoints:

| Breakpoint | Tamaño | Descripción |
|------------|--------|-------------|
| `xs` | < 380px | Móviles muy pequeños |
| `sm` | 380px - 768px | Móviles |
| `md` | 768px - 1024px | Tablets |
| `lg` | 1024px - 1280px | Laptops |
| `xl` | ≥ 1280px | Desktop |

## Hook `useBreakpoint`

Retorna el breakpoint actual como string.

```tsx
import { useBreakpoint } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl'

  return (
    <View className={breakpoint === 'xs' ? 'p-2' : 'p-4'}>
      <Text>Breakpoint actual: {breakpoint}</Text>
    </View>
  );
};
```

## Hook `useBreakpoints`

Retorna un objeto con valores booleanos para cada breakpoint y helpers útiles.

```tsx
import { useBreakpoints } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const { isMobile, isTablet, isDesktop, isXs, isSm, isMd, isLg, isXl } = useBreakpoints();

  return (
    <View className={isMobile ? 'flex-col' : 'flex-row'}>
      {/* Contenido */}
    </View>
  );
};
```

### API

```typescript
interface BreakpointsResult {
  isXs: boolean;      // breakpoint === 'xs'
  isSm: boolean;      // breakpoint === 'sm'
  isMd: boolean;      // breakpoint === 'md'
  isLg: boolean;      // breakpoint === 'lg'
  isXl: boolean;      // breakpoint === 'xl'
  isMobile: boolean;  // xs o sm
  isTablet: boolean;  // md
  isDesktop: boolean; // lg o xl
}
```

## Hook `useScreenWidth`

Retorna el ancho actual de la pantalla en pixels.

```tsx
import { useScreenWidth } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const width = useScreenWidth();

  return <Text>Ancho: {width}px</Text>;
};
```

### Ejemplos

#### Cambiar layout según dispositivo

```tsx
import { useBreakpoints } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const { isMobile } = useBreakpoints();

  return (
    <View className={isMobile ? 'p-4' : 'p-8'}>
      <View className={isMobile ? 'flex-col gap-2' : 'flex-row gap-4'}>
        <Card />
        <Card />
      </View>
    </View>
  );
};
```

#### Mostrar/ocultar elementos según el tamaño

```tsx
import { useBreakpoints } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const { isDesktop } = useBreakpoints();

  return (
    <View>
      <Text>Contenido principal</Text>
      {isDesktop && <Sidebar />}
    </View>
  );
};
```

#### Adaptar tamaños dinámicamente

```tsx
import { useBreakpoints, useScreenWidth } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const { isMobile } = useBreakpoints();
  const width = useScreenWidth();
  const cardWidth = isMobile ? width - 32 : 300;

  return (
    <View style={{ width: cardWidth }}>
      <Card />
    </View>
  );
};
```

## Hook `useBreakpointValue`

Retorna diferentes valores según el breakpoint actual. Si el breakpoint actual no tiene un valor definido, busca automáticamente en breakpoints más pequeños (fallback).

### Uso

```tsx
import { useBreakpointValue } from '@common/hooks/useBreakpoint';

const MyComponent = () => {
  const columns = useBreakpointValue({ 
    xs: 1, 
    sm: 2, 
    md: 3, 
    lg: 4,
    xl: 5 
  });

  const padding = useBreakpointValue({ 
    xs: 16, 
    md: 24, 
    lg: 32 
  });

  return (
    <View style={{ padding }}>
      {/* Grid con {columns} columnas */}
    </View>
  );
};
```

### Características

- **Fallback automático**: Si no se define un valor para el breakpoint actual, busca el valor del breakpoint más pequeño definido
- **Type-safe**: TypeScript infiere el tipo correcto del valor retornado
- **Flexible**: Acepta cualquier tipo de valor (números, strings, objetos, etc.)

### Ejemplos

#### Espaciado responsive

```tsx
const padding = useBreakpointValue({ 
  xs: 8,   // móvil: padding pequeño
  md: 16,  // tablet: padding mediano
  lg: 24   // desktop: padding grande
});
```

#### Número de columnas en grid

```tsx
const columns = useBreakpointValue({ 
  xs: 1,   // móvil: 1 columna
  sm: 2,   // móvil grande: 2 columnas
  md: 3,   // tablet: 3 columnas
  lg: 4    // desktop: 4 columnas
});
```

#### Tamaños de componentes

```tsx
const cardSize = useBreakpointValue({ 
  xs: 'small',
  md: 'medium',
  lg: 'large'
});
```

## Componente PDFGrid

Componente de ejemplo que implementa un grid responsive para mostrar archivos PDF.

### Ubicación

```
src/features/home/presentation/components/PDFGrid.tsx
```

### Comportamiento

1. **Mobile (< 768px)**
   - Grid de 2 columnas fijas
   - Ancho calculado dinámicamente: `(width - gap * 3) / 2`
   - Espaciado consistente entre cards (vertical y horizontal)

2. **Desktop (≥ 768px)**
   - Grid horizontal flexible sin columnas fijas
   - Cards de tamaño mediano fijo (160px)
   - Los elementos fluyen horizontalmente y se envuelven hacia abajo automáticamente

### Uso

```tsx
import PDFGrid, { type PDFItem } from './components/PDFGrid';

const items: PDFItem[] = [
  {
    id: '1',
    title: 'Clean Code',
    description: 'Robert C. Martin',
    progress: {
      numberProgress: 0.65,
      semanticProgress: '65%',
    },
  },
  // ... más items
];

<PDFGrid 
  items={items} 
  onItemPress={(item) => console.log('Seleccionado:', item.title)} 
/>
```

## Mejores Prácticas

### 1. Usar NativeWind cuando sea posible

```tsx
// ✅ Preferir
<View className="flex-col md:flex-row gap-4 md:gap-6" />

// ⚠️ Solo usar cuando sea necesario cálculos dinámicos
<View style={{ width: calculatedWidth }} />
```

### 2. Combinar hooks con tokens del theme

```tsx
import { spacing } from '@common/presentation/theme';
import { useBreakpoints } from '@common/hooks/useBreakpoint';

const { isMobile } = useBreakpoints();
const gap = isMobile ? spacing.md : spacing.lg;
```

### 3. Mantener consistencia en espaciados

```tsx
// Usar el mismo gap para horizontal y vertical
<View style={{ gap: 16 }}>
  {/* Cards con espaciado uniforme */}
</View>
```

### 4. Testing responsive

Siempre probar en:
- Móvil pequeño (< 480px)
- Móvil grande (480px - 768px)
- Tablet (768px - 1024px)
- Desktop (≥ 1024px)
- Web y mobile nativo

## Recursos Adicionales

- [Tokens del Theme](./THEME_README.md)
- [Tipografía](./TYPOGRAPHY.md)
- [NativeWind Documentation](https://www.nativewind.dev/)
