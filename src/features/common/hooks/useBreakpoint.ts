/**
 * useBreakpoint Hook
 *
 * Custom hook that returns the current breakpoint based on screen width.
 * Useful for creating responsive layouts in React Native.
 */

import { useEffect, useState } from 'react';
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

    const subscription = Dimensions.addEventListener(
      'change',
      updateBreakpoint
    );
    return () => subscription.remove();
  }, []);

  return breakpoint;
}

/**
 * Hook to get the current screen width
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
 * Hook that returns boolean values for each breakpoint
 */
export function useBreakpoints() {
  const breakpoint = useBreakpoint();

  return {
    isXs: breakpoint === 'xs',
    isSm: breakpoint === 'sm',
    isMd: breakpoint === 'md',
    isLg: breakpoint === 'lg',
    isXl: breakpoint === 'xl',
    // Useful helpers
    isMobile: breakpoint === 'xs' || breakpoint === 'sm',
    isTablet: breakpoint === 'md',
    isDesktop: breakpoint === 'lg' || breakpoint === 'xl',
  };
}

/**
 * Usage examples:
 *
 * ```tsx
 * import { useBreakpoint, useBreakpoints } from '@common/hooks/useBreakpoint';
 *
 * // Example 1: With breakpoint string
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
 * // Example 2: With boolean helpers
 * function ResponsiveGrid() {
 *   const { isMobile, isTablet, isDesktop } = useBreakpoints();
 *   const columns = isMobile ? 1 : isTablet ? 2 : 3;
 *
 *   return <FlatList numColumns={columns} />;
 * }
 * ```
 */
