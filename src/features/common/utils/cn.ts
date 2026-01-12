/**
 * cn (classnames) utility
 *
 * Combines multiple Tailwind/NativeWind classes conditionally.
 * Similar to clsx or classnames but optimized for React Native.
 *
 * @example
 * ```tsx
 * <View className={cn(
 *   'p-4 rounded-lg',
 *   isActive && 'bg-primary',
 *   isDisabled && 'opacity-50'
 * )} />
 * ```
 */

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter((x) => typeof x === 'string' && x.length > 0)
    .join(' ')
    .trim();
}

/**
 * Variant of cn that also accepts conditional objects
 *
 * @example
 * ```tsx
 * <View className={cnx(
 *   'p-4 rounded-lg',
 *   {
 *     'bg-primary': isActive,
 *     'opacity-50': isDisabled,
 *   }
 * )} />
 * ```
 */
export function cnx(
  ...classes: (ClassValue | Record<string, boolean>)[]
): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === 'string') {
      result.push(cls);
    } else if (typeof cls === 'object' && !Array.isArray(cls)) {
      // It's an object with conditional keys
      for (const [key, value] of Object.entries(cls)) {
        if (value) {
          result.push(key);
        }
      }
    } else if (Array.isArray(cls)) {
      const nested = cnx(...cls);
      if (nested) {
        result.push(nested);
      }
    }
  }

  return result.join(' ').trim();
}
