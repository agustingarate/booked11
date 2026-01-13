# 📝 Sistema de Tipografía (NativeWind)

Clases semánticas listas para usar en `className`, sin `@apply` y sin props web-only.

```tsx
<View className="p-4 bg-surface-muted">
  <Text className="text-display-2 text-primary-700">Título</Text>
  <Text className="text-title-md text-text-secondary mt-2">Subtítulo</Text>
  <Text className="text-body mt-3 text-text-primary">
    Texto de cuerpo con Noto Sans.
  </Text>
  <Text className="text-label mt-4 text-text-muted">Etiqueta</Text>
  <Pressable className="mt-6 bg-primary-500 rounded-lg px-4 py-3">
    <Text className="text-button text-text-inverse">Acción</Text>
  </Pressable>
</View>
```

## Clases Disponibles

### Display

- `text-display-1` (Lexend Black, 48px)
- `text-display-2` (Lexend Bold, 40px)

### Titles

- `text-title-lg` (Lexend Bold, 32px)
- `text-title-md` (Lexend SemiBold, 28px)
- `text-title-sm` (Lexend SemiBold, 24px)
- `text-subtitle` (Lexend Medium, 20px)

### Body

- `text-body-lg` (Noto Sans Regular, 18px)
- `text-body` (Noto Sans Regular, 16px)
- `text-body-sm` (Noto Sans Regular, 14px)
- `text-body-xs` (Noto Sans Regular, 12px)

### Labels & Captions

- `text-label-lg` (Noto Sans Medium, 18px)
- `text-label` (Noto Sans Medium, 14px)
- `text-label-sm` (Noto Sans Medium, 12px)
- `text-caption` (Noto Sans Regular, 12px)
- `text-overline` (Noto Sans SemiBold, 12px, uppercase)

### Botones

- `text-button-lg` (Lexend SemiBold, 18px)
- `text-button` (Lexend SemiBold, 16px)
- `text-button-sm` (Lexend Medium, 14px)

### Especiales

- `text-lead` (Noto Sans Medium, 20px)
- `text-muted` (Noto Sans Regular, 14px, color muted)
- `text-inverse` (Lexend SemiBold, 16px, color inverse)
- `text-code` (Mono, 14px)
- `text-code-lg` (Mono, 16px)

## Tips Rápidos

- Combina colores y estados:
  - `text-title-md text-primary-700`
  - `text-body dark:text-text-inverse`
  - `text-button text-text-inverse bg-primary-500`

- Condicionales:
  - `className={isError ? 'text-label text-error-600' : 'text-label'}`

- Con `cn()`:
  ```tsx
  import { cn } from '@common';
  <Text className={cn('text-title-sm', disabled && 'text-disabled-foreground')}>
    Texto
  </Text>;
  ```

## Dónde se Definen

- Clases: `tailwind.typography.plugin.js`
- Tokens: `src/main/theme.ts`

No hay duplicación: el plugin solo combina tokens centralizados. IntelliSense (extensión Tailwind) reconoce las clases automáticamente. 🚀
