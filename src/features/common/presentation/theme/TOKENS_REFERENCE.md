# 📖 Tokens Reference - Quick Lookup

Quick reference of all available tokens in the Design System.

## 🎨 Colors

### Primary

| Token                 | Value     | Preview | Usage                               |
| --------------------- | --------- | ------- | ----------------------------------- |
| `colors.primary`      | `#136dec` | 🟦      | CTA buttons, links, active elements |
| `colors.primaryLight` | `#dbeafe` | 🔵      | Hover backgrounds, badges           |
| `colors.primaryDark`  | `#0d45a6` | 🔷      | Pressed states, borders             |

**NativeWind Classes:**

- `bg-primary` / `text-primary` / `border-primary`

### Backgrounds

| Token                    | Value     | Preview | Dark Mode | Usage                   |
| ------------------------ | --------- | ------- | --------- | ----------------------- |
| `colors.backgroundLight` | `#f6f7f8` | ⬜      | -         | Light screen background |
| `colors.backgroundDark`  | `#101822` | ⬛      | ✓         | Dark screen background  |

**NativeWind Classes:**

- `bg-background-light` / `dark:bg-background-dark`

### Surfaces (Cards, Panels)

| Token                   | Value     | Preview | Dark Mode | Usage                       |
| ----------------------- | --------- | ------- | --------- | --------------------------- |
| `colors.surfaceLight`   | `#ffffff` | ⬜      | -         | Cards, modals in light mode |
| `colors.surfaceDark`    | `#1e2936` | ⬛      | ✓         | Cards, modals in dark mode  |
| `colors.surfaceCard`    | `#1a222d` | ⬛      | ✓         | Elevated cards              |
| `colors.surfaceToolbar` | `#161f2b` | ⬛      | ✓         | Toolbars, bottom bars       |

**NativeWind Classes:**

- `bg-surface-light` / `dark:bg-surface-dark`
- `dark:bg-surface-dark-card`
- `dark:bg-surface-dark-toolbar`

### Borders

| Token                | Value     | Preview | Dark Mode | Usage                 |
| -------------------- | --------- | ------- | --------- | --------------------- |
| `colors.borderLight` | `#e5e7eb` | 🔲      | -         | Borders in light mode |
| `colors.borderDark`  | `#2A3645` | ⬛      | ✓         | Borders in dark mode  |

**NativeWind Classes:**

- `border-light` / `dark:border-dark`

### Text Colors

| Token                       | Value     | Dark Mode | Usage                  |
| --------------------------- | --------- | --------- | ---------------------- |
| `colors.textPrimaryLight`   | `#0f172a` | -         | Primary text (light)   |
| `colors.textPrimaryDark`    | `#ffffff` | ✓         | Primary text (dark)    |
| `colors.textSecondaryLight` | `#64748b` | -         | Secondary text (light) |
| `colors.textSecondaryDark`  | `#92a9c9` | ✓         | Secondary text (dark)  |

**NativeWind Classes:**

- `text-text-primary-light` / `dark:text-text-primary-dark`
- `text-text-secondary-light` / `dark:text-text-secondary-dark`

### Semantic Colors

| Token            | Value     | Preview | Usage                         |
| ---------------- | --------- | ------- | ----------------------------- |
| `colors.success` | `#22c55e` | 🟢      | Success states, confirmations |
| `colors.error`   | `#ef4444` | 🔴      | Errors, destructive actions   |
| `colors.warning` | `#f59e0b` | 🟡      | Warnings, cautions            |

**NativeWind Classes:**

- `bg-success` / `text-success`
- `bg-error` / `text-error`
- `bg-warning` / `text-warning`

### Gray Scale

| Token              | Value     | Preview |
| ------------------ | --------- | ------- |
| `colors.gray[50]`  | `#f9fafb` | ⬜      |
| `colors.gray[100]` | `#f3f4f6` | 🔲      |
| `colors.gray[200]` | `#e5e7eb` | ⬜      |
| `colors.gray[300]` | `#d1d5db` | 🔲      |
| `colors.gray[400]` | `#9ca3af` | ⬜      |
| `colors.gray[500]` | `#6b7280` | 🔲      |
| `colors.gray[600]` | `#4b5563` | ⬛      |
| `colors.gray[700]` | `#374151` | ⬛      |
| `colors.gray[800]` | `#1f2937` | ⬛      |
| `colors.gray[900]` | `#111827` | ⬛      |

**NativeWind Classes:**

- `bg-gray-100` / `text-gray-500` / etc.

### Slate Scale

| Token               | Value     | Preview | Usage                  |
| ------------------- | --------- | ------- | ---------------------- |
| `colors.slate[100]` | `#f1f5f9` | ⬜      | Subtle backgrounds     |
| `colors.slate[200]` | `#e2e8f0` | 🔲      | Soft borders           |
| `colors.slate[400]` | `#94a3b8` | ⬜      | Tertiary text          |
| `colors.slate[500]` | `#64748b` | 🔲      | Secondary text         |
| `colors.slate[600]` | `#475569` | ⬛      | Text on light surfaces |
| `colors.slate[700]` | `#334155` | ⬛      | Emphasized text        |
| `colors.slate[900]` | `#0f172a` | ⬛      | Primary text           |

**NativeWind Classes:**

- `bg-slate-100` / `text-slate-500` / etc.

## 📏 Spacing

| Token         | Value  | Preview    | Common Usage                     |
| ------------- | ------ | ---------- | -------------------------------- |
| `spacing[0]`  | `0px`  | -          | No space                         |
| `spacing[1]`  | `4px`  | `▫`        | Very small spaces                |
| `spacing[2]`  | `8px`  | `▫▫`       | Small spaces                     |
| `spacing[3]`  | `12px` | `▫▫▫`      | Minimal gaps                     |
| `spacing[4]`  | `16px` | `▫▫▫▫`     | **Most used** - Standard padding |
| `spacing[5]`  | `20px` | `▫▫▫▫▫`    | Generous padding                 |
| `spacing[6]`  | `24px` | `▫▫▫▫▫▫`   | Sections                         |
| `spacing[8]`  | `32px` | `▫▫▫▫▫▫▫▫` | Large separation                 |
| `spacing[10]` | `40px` | -          | Headers                          |
| `spacing[12]` | `48px` | -          | Large sections                   |
| `spacing[16]` | `64px` | -          | Huge margins                     |

**NativeWind Classes:**

- `p-4` = padding 16px
- `px-6` = horizontal padding 24px
- `py-3` = vertical padding 12px
- `m-4` = margin 16px
- `gap-4` = gap 16px

## 🔤 Typography

### Font Family

| Token                | Value       | Usage            |
| -------------------- | ----------- | ---------------- |
| `fontFamily.display` | `Lexend`    | Titles, headings |
| `fontFamily.body`    | `Noto Sans` | Body text        |
| `fontFamily.sans`    | `Lexend`    | Default          |

**NativeWind Classes:**

- `font-display` / `font-body` / `font-sans`

### Font Sizes

| Token             | Value  | Preview | Usage                 |
| ----------------- | ------ | ------- | --------------------- |
| `fontSize.xs`     | `10px` | ᵃᵃ      | Badges, footnotes     |
| `fontSize.sm`     | `12px` | ᵃᴬ      | Captions, subtitles   |
| `fontSize.base`   | `14px` | Aa      | **Base text**         |
| `fontSize.lg`     | `16px` | **Aa**  | Main text             |
| `fontSize.xl`     | `18px` | **AA**  | Highlighted subtitles |
| `fontSize['2xl']` | `20px` | **AA**  | Small titles          |
| `fontSize['3xl']` | `24px` | **AA**  | Medium titles         |
| `fontSize['4xl']` | `28px` | **AA**  | Large titles          |
| `fontSize['5xl']` | `32px` | **AA**  | Headers               |
| `fontSize['6xl']` | `36px` | **AA**  | Hero titles           |

**NativeWind Classes:**

- `text-xs` / `text-sm` / `text-base` / `text-lg` / `text-xl` / etc.

### Font Weights

| Token                  | Value | Preview        | Usage            |
| ---------------------- | ----- | -------------- | ---------------- |
| `fontWeight.light`     | `300` | Light          | Delicate text    |
| `fontWeight.normal`    | `400` | Normal         | Regular text     |
| `fontWeight.medium`    | `500` | **Medium**     | Important text   |
| `fontWeight.semibold`  | `600` | **Semibold**   | Subtitles        |
| `fontWeight.bold`      | `700` | **Bold**       | Titles, CTAs     |
| `fontWeight.extrabold` | `800` | **Extra Bold** | Super emphasized |

**NativeWind Classes:**

- `font-light` / `font-normal` / `font-medium` / `font-semibold` / `font-bold` / `font-extrabold`

## 📐 Border Radius

| Token            | Value    | Preview | Usage                          |
| ---------------- | -------- | ------- | ------------------------------ |
| `radius.none`    | `0px`    | ▭       | No rounded borders             |
| `radius.sm`      | `4px`    | ▢       | Subtle borders                 |
| `radius.DEFAULT` | `4px`    | ▢       | Default                        |
| `radius.md`      | `8px`    | ▢       | Small cards                    |
| `radius.lg`      | `12px`   | ▢       | **Most used** - Cards, buttons |
| `radius.xl`      | `16px`   | ▢       | Modals, panels                 |
| `radius['2xl']`  | `16px`   | ▢       | Large elements                 |
| `radius['3xl']`  | `24px`   | ▢       | Bottom sheets                  |
| `radius.full`    | `9999px` | ●       | Circles, pills                 |

**NativeWind Classes:**

- `rounded-none` / `rounded-sm` / `rounded` / `rounded-md` / `rounded-lg` / `rounded-xl` / `rounded-full`

## 💫 Shadows (React Native)

| Token             | Elevation | Usage                       |
| ----------------- | --------- | --------------------------- |
| `shadows.sm`      | 2         | Subtly elevated elements    |
| `shadows.md`      | 4         | Cards, buttons              |
| `shadows.lg`      | 8         | Modals, floating elements   |
| `shadows.xl`      | 12        | Sheets, popups              |
| `shadows['2xl']`  | 16        | Hero elements               |
| `shadows.primary` | 8         | Elements with primary color |

**Usage:**

```typescript
style={{ ...shadows.md }}
```

**NativeWind (Web only):**

- `shadow-sm` / `shadow` / `shadow-md` / `shadow-lg` / `shadow-xl`

## 🔍 Opacity

| Token          | Value  | Preview        | Usage             |
| -------------- | ------ | -------------- | ----------------- |
| `opacity[0]`   | `0`    | ⬜ (invisible) | Hidden            |
| `opacity[5]`   | `0.05` | ⬜             | Very subtle       |
| `opacity[10]`  | `0.1`  | ⬜             | Hover backgrounds |
| `opacity[20]`  | `0.2`  | ⬜             | Light overlays    |
| `opacity[40]`  | `0.4`  | ▢              | Disabled states   |
| `opacity[50]`  | `0.5`  | ▢              | Semi-transparent  |
| `opacity[80]`  | `0.8`  | ▢              | Almost opaque     |
| `opacity[100]` | `1`    | ⬛             | Opaque            |

**NativeWind Classes:**

- `opacity-0` / `opacity-50` / `opacity-100`

## 📱 Breakpoints

| Breakpoint | Width  | Device           |
| ---------- | ------ | ---------------- |
| `xs`       | 0px    | Small mobiles    |
| `sm`       | 380px  | Standard mobiles |
| `md`       | 768px  | Tablets          |
| `lg`       | 1024px | Desktop          |
| `xl`       | 1280px | Large desktop    |

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

## 📝 Common Combination Examples

### Card with title and description

```tsx
<View className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-md">
  <Text className="text-lg font-bold text-slate-900 dark:text-white mb-2">
    Title
  </Text>
  <Text className="text-sm text-slate-600 dark:text-slate-400">
    Description
  </Text>
</View>
```

### Primary button

```tsx
<TouchableOpacity className="bg-primary py-3 px-6 rounded-lg">
  <Text className="text-white text-base font-bold text-center">Action</Text>
</TouchableOpacity>
```

### Input field

```tsx
<TextInput
  className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white"
  placeholder="Type here..."
  placeholderTextColor="#94a3b8"
/>
```

---

**Tip**: Save this file as a quick reference while developing. All these tokens are available in code and are type-safe with TypeScript. 🎨
