/**
 * useBreakpoint Hook
 * 
 * Hook personalizado que devuelve el breakpoint actual basado en el ancho de la pantalla.
 * Útil para crear layouts responsive en React Native.
 */

import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const BREAKPOINTS = {
  xs: 0,
  sm: 380,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    const { width } = Dimensions.get('window');
    return getBreakpoint(width);
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      const { width } = Dimensions.get('window');
      setBreakpoint(getBreakpoint(width));
    };

    const subscription = Dimensions.addEventListener('change', updateBreakpoint);
    return () => subscription.remove();
  }, []);

  return breakpoint;
}

/**
 * Hook para obtener el ancho actual de la pantalla
 */
export function useScreenWidth(): number {
  const [width, setWidth] = useState(() => Dimensions.get('window').width);

  useEffect(() => {
    const updateWidth = () => {
      const { width: newWidth } = Dimensions.get('window');
      setWidth(newWidth);
    };

    const subscription = Dimensions.addEventListener('change', updateWidth);
    return () => subscription.remove();
  }, []);

  return width;
}

/**
 * Hook que devuelve valores booleanos para cada breakpoint
 */
export function useBreakpoints() {
  const breakpoint = useBreakpoint();
  
  return {
    isXs: breakpoint === 'xs',
    isSm: breakpoint === 'sm',
    isMd: breakpoint === 'md',
    isLg: breakpoint === 'lg',
    isXl: breakpoint === 'xl',
    // Helpers útiles
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl',
  };
}

/**
 * Ejemplos de uso:
 * 
 * ```tsx
 * import { useBreakpoint, useBreakpoints } from '@common/hooks/useBreakpoint';
 * 
 * // Ejemplo 1: Con breakpoint string
 * function MyComponent() {
 *   const breakpoint = useBreakpoint();
 *   
 *   return (
 *     <View className={breakpoint === 'xs' ? 'p-2' : 'p-4'}>
 *       <Text>Breakpoint: {breakpoint}</Text>
 *     </View>
 *   );
 * }
 * 
 * // Ejemplo 2: Con helpers booleanos
 * function ResponsiveGrid() {
 *   const { isMobile, isTablet, isDesktop } = useBreakpoints();
 *   const columns = isMobile ? 1 : isTablet ? 2 : 3;
 *   
 *   return <FlatList numColumns={columns} />;
 * }
 * ```
 */
