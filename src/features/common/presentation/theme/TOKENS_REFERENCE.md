# 📖 Tokens Reference - Quick Lookup

Referencia rápida de todos los tokens disponibles en el Design System.

## 🎨 Colors

### Primary

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `colors.primary` | `#136dec` | 🟦 | Botones CTA, enlaces, elementos activos |
| `colors.primaryLight` | `#dbeafe` | 🔵 | Backgrounds hover, badges |
| `colors.primaryDark` | `#0d45a6` | 🔷 | Pressed states, bordes |

**NativeWind Classes:**
- `bg-primary` / `text-primary` / `border-primary`

### Backgrounds

| Token | Valor | Preview | Dark Mode | Uso |
|-------|-------|---------|-----------|-----|
| `colors.backgroundLight` | `#f6f7f8` | ⬜ | - | Screen background claro |
| `colors.backgroundDark` | `#101822` | ⬛ | ✓ | Screen background oscuro |

**NativeWind Classes:**
- `bg-background-light` / `dark:bg-background-dark`

### Surfaces (Cards, Panels)

| Token | Valor | Preview | Dark Mode | Uso |
|-------|-------|---------|-----------|-----|
| `colors.surfaceLight` | `#ffffff` | ⬜ | - | Cards, modals en light mode |
| `colors.surfaceDark` | `#1e2936` | ⬛ | ✓ | Cards, modals en dark mode |
| `colors.surfaceCard` | `#1a222d` | ⬛ | ✓ | Cards elevados |
| `colors.surfaceToolbar` | `#161f2b` | ⬛ | ✓ | Toolbars, bottom bars |

**NativeWind Classes:**
- `bg-surface-light` / `dark:bg-surface-dark`
- `dark:bg-surface-dark-card`
- `dark:bg-surface-dark-toolbar`

### Borders

| Token | Valor | Preview | Dark Mode | Uso |
|-------|-------|---------|-----------|-----|
| `colors.borderLight` | `#e5e7eb` | 🔲 | - | Bordes en light mode |
| `colors.borderDark` | `#2A3645` | ⬛ | ✓ | Bordes en dark mode |

**NativeWind Classes:**
- `border-light` / `dark:border-dark`

### Text Colors

| Token | Valor | Dark Mode | Uso |
|-------|-------|-----------|-----|
| `colors.textPrimaryLight` | `#0f172a` | - | Texto principal (light) |
| `colors.textPrimaryDark` | `#ffffff` | ✓ | Texto principal (dark) |
| `colors.textSecondaryLight` | `#64748b` | - | Texto secundario (light) |
| `colors.textSecondaryDark` | `#92a9c9` | ✓ | Texto secundario (dark) |

**NativeWind Classes:**
- `text-text-primary-light` / `dark:text-text-primary-dark`
- `text-text-secondary-light` / `dark:text-text-secondary-dark`

### Semantic Colors

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `colors.success` | `#22c55e` | 🟢 | Estados exitosos, confirmaciones |
| `colors.error` | `#ef4444` | 🔴 | Errores, acciones destructivas |
| `colors.warning` | `#f59e0b` | 🟡 | Advertencias, precauciones |

**NativeWind Classes:**
- `bg-success` / `text-success`
- `bg-error` / `text-error`
- `bg-warning` / `text-warning`

### Gray Scale

| Token | Valor | Preview |
|-------|-------|---------|
| `colors.gray[50]` | `#f9fafb` | ⬜ |
| `colors.gray[100]` | `#f3f4f6` | 🔲 |
| `colors.gray[200]` | `#e5e7eb` | ⬜ |
| `colors.gray[300]` | `#d1d5db` | 🔲 |
| `colors.gray[400]` | `#9ca3af` | ⬜ |
| `colors.gray[500]` | `#6b7280` | 🔲 |
| `colors.gray[600]` | `#4b5563` | ⬛ |
| `colors.gray[700]` | `#374151` | ⬛ |
| `colors.gray[800]` | `#1f2937` | ⬛ |
| `colors.gray[900]` | `#111827` | ⬛ |

**NativeWind Classes:**
- `bg-gray-100` / `text-gray-500` / etc.

### Slate Scale

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `colors.slate[100]` | `#f1f5f9` | ⬜ | Backgrounds sutiles |
| `colors.slate[200]` | `#e2e8f0` | 🔲 | Borders suaves |
| `colors.slate[400]` | `#94a3b8` | ⬜ | Texto terciario |
| `colors.slate[500]` | `#64748b` | 🔲 | Texto secundario |
| `colors.slate[600]` | `#475569` | ⬛ | Texto en surfaces claras |
| `colors.slate[700]` | `#334155` | ⬛ | Texto enfatizado |
| `colors.slate[900]` | `#0f172a` | ⬛ | Texto principal |

**NativeWind Classes:**
- `bg-slate-100` / `text-slate-500` / etc.

## 📏 Spacing

| Token | Valor | Preview | Uso Común |
|-------|-------|---------|-----------|
| `spacing[0]` | `0px` | - | Sin espacio |
| `spacing[1]` | `4px` | `▫` | Espacios muy pequeños |
| `spacing[2]` | `8px` | `▫▫` | Espacios pequeños |
| `spacing[3]` | `12px` | `▫▫▫` | Gaps mínimos |
| `spacing[4]` | `16px` | `▫▫▫▫` | **Más usado** - Padding estándar |
| `spacing[5]` | `20px` | `▫▫▫▫▫` | Padding generoso |
| `spacing[6]` | `24px` | `▫▫▫▫▫▫` | Secciones |
| `spacing[8]` | `32px` | `▫▫▫▫▫▫▫▫` | Separación grande |
| `spacing[10]` | `40px` | - | Headers |
| `spacing[12]` | `48px` | - | Secciones grandes |
| `spacing[16]` | `64px` | - | Márgenes enormes |

**NativeWind Classes:**
- `p-4` = padding 16px
- `px-6` = padding horizontal 24px
- `py-3` = padding vertical 12px
- `m-4` = margin 16px
- `gap-4` = gap 16px

## 🔤 Typography

### Font Family

| Token | Valor | Uso |
|-------|-------|-----|
| `fontFamily.display` | `Lexend` | Títulos, headings |
| `fontFamily.body` | `Noto Sans` | Cuerpo de texto |
| `fontFamily.sans` | `Lexend` | Default |

**NativeWind Classes:**
- `font-display` / `font-body` / `font-sans`

### Font Sizes

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `fontSize.xs` | `10px` | ᵃᵃ | Badges, footnotes |
| `fontSize.sm` | `12px` | ᵃᴬ | Captions, subtítulos |
| `fontSize.base` | `14px` | Aa | **Texto base** |
| `fontSize.lg` | `16px` | **Aa** | Texto principal |
| `fontSize.xl` | `18px` | **AA** | Subtítulos destacados |
| `fontSize['2xl']` | `20px` | **AA** | Títulos pequeños |
| `fontSize['3xl']` | `24px` | **AA** | Títulos medianos |
| `fontSize['4xl']` | `28px` | **AA** | Títulos grandes |
| `fontSize['5xl']` | `32px` | **AA** | Headers |
| `fontSize['6xl']` | `36px` | **AA** | Hero titles |

**NativeWind Classes:**
- `text-xs` / `text-sm` / `text-base` / `text-lg` / `text-xl` / etc.

### Font Weights

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `fontWeight.light` | `300` | Light | Texto delicado |
| `fontWeight.normal` | `400` | Normal | Texto regular |
| `fontWeight.medium` | `500` | **Medium** | Texto importante |
| `fontWeight.semibold` | `600` | **Semibold** | Subtítulos |
| `fontWeight.bold` | `700` | **Bold** | Títulos, CTAs |
| `fontWeight.extrabold` | `800` | **Extra Bold** | Super destacado |

**NativeWind Classes:**
- `font-light` / `font-normal` / `font-medium` / `font-semibold` / `font-bold` / `font-extrabold`

## 📐 Border Radius

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `radius.none` | `0px` | ▭ | Sin bordes redondeados |
| `radius.sm` | `4px` | ▢ | Bordes sutiles |
| `radius.DEFAULT` | `4px` | ▢ | Default |
| `radius.md` | `8px` | ▢ | Cards pequeñas |
| `radius.lg` | `12px` | ▢ | **Más usado** - Cards, buttons |
| `radius.xl` | `16px` | ▢ | Modals, panels |
| `radius['2xl']` | `16px` | ▢ | Elementos grandes |
| `radius['3xl']` | `24px` | ▢ | Bottom sheets |
| `radius.full` | `9999px` | ● | Círculos, pills |

**NativeWind Classes:**
- `rounded-none` / `rounded-sm` / `rounded` / `rounded-md` / `rounded-lg` / `rounded-xl` / `rounded-full`

## 💫 Shadows (React Native)

| Token | Elevation | Uso |
|-------|-----------|-----|
| `shadows.sm` | 2 | Elementos sutilmente elevados |
| `shadows.md` | 4 | Cards, buttons |
| `shadows.lg` | 8 | Modals, floating elements |
| `shadows.xl` | 12 | Sheets, popups |
| `shadows['2xl']` | 16 | Hero elements |
| `shadows.primary` | 8 | Elementos con color primary |

**Uso:**
```typescript
style={{ ...shadows.md }}
```

**NativeWind (Web only):**
- `shadow-sm` / `shadow` / `shadow-md` / `shadow-lg` / `shadow-xl`

## 🔍 Opacity

| Token | Valor | Preview | Uso |
|-------|-------|---------|-----|
| `opacity[0]` | `0` | ⬜ (invisible) | Oculto |
| `opacity[5]` | `0.05` | ⬜ | Muy sutil |
| `opacity[10]` | `0.1` | ⬜ | Hover backgrounds |
| `opacity[20]` | `0.2` | ⬜ | Overlays ligeros |
| `opacity[40]` | `0.4` | ▢ | Disabled states |
| `opacity[50]` | `0.5` | ▢ | Semi-transparente |
| `opacity[80]` | `0.8` | ▢ | Casi opaco |
| `opacity[100]` | `1` | ⬛ | Opaco |

**NativeWind Classes:**
- `opacity-0` / `opacity-50` / `opacity-100`

## 📱 Breakpoints (Unistyles)

| Breakpoint | Ancho | Dispositivo |
|------------|-------|-------------|
| `xs` | 0px | Móviles pequeños |
| `sm` | 380px | Móviles estándar |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Desktop grande |

## 🎯 Common Styles

### Card
```typescript
{
  borderRadius: 12,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 4,
}
```

### Button Primary
```typescript
{
  backgroundColor: '#136dec',
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 24,
}
```

### FAB (Floating Action Button)
```typescript
{
  width: 56,
  height: 56,
  borderRadius: 16,
  backgroundColor: '#136dec',
  justifyContent: 'center',
  alignItems: 'center',
}
```

### Input
```typescript
{
  backgroundColor: '#ffffff',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#e5e7eb',
  paddingVertical: 12,
  paddingHorizontal: 16,
  fontSize: 14,
}
```

## 📝 Ejemplos de Combinaciones Comunes

### Card con título y descripción
```tsx
<View className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-md">
  <Text className="text-lg font-bold text-slate-900 dark:text-white mb-2">
    Título
  </Text>
  <Text className="text-sm text-slate-600 dark:text-slate-400">
    Descripción
  </Text>
</View>
```

### Button primary
```tsx
<TouchableOpacity className="bg-primary py-3 px-6 rounded-lg">
  <Text className="text-white text-base font-bold text-center">
    Acción
  </Text>
</TouchableOpacity>
```

### Input field
```tsx
<TextInput
  className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white"
  placeholder="Escribe aquí..."
  placeholderTextColor="#94a3b8"
/>
```

---

**Tip**: Guarda este archivo como referencia rápida mientras desarrollas. Todos estos tokens están disponibles en el código y son type-safe con TypeScript. 🎨
