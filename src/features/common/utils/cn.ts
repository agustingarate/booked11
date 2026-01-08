/**
 * cn (classnames) utility
 * 
 * Combina múltiples clases de Tailwind/NativeWind de manera condicional.
 * Similar a clsx o classnames pero optimizado para React Native.
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
 * Variante de cn que también acepta objetos condicionales
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
export function cnx(...classes: (ClassValue | Record<string, boolean>)[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === 'string') {
      result.push(cls);
    } else if (typeof cls === 'object' && !Array.isArray(cls)) {
      // Es un objeto con claves condicionales
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
