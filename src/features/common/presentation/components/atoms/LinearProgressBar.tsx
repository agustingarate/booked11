import React, { useEffect } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { cn } from '@common/utils/cn';

export interface LinearProgressBarProps {
  /**
   * Progreso del indicador. Puede ser un número entre 0-1 o 0-100.
   * Se normaliza automáticamente.
   */
  progress?: number;
  /**
   * Si es true, muestra una animación de carga indefinida.
   * Tiene prioridad sobre el prop progress.
   */
  isLoading?: boolean;
  /**
   * Clase personalizada para el contenedor base (track)
   */
  className?: string;
  /**
   * Clase personalizada para la barra de progreso
   */
  progressClassName?: string;
  /**
   * Estilo personalizado para el contenedor base (track)
   */
  style?: ViewStyle;
  /**
   * Estilo personalizado para la barra de progreso
   */
  progressStyle?: ViewStyle;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  progress = 0,
  isLoading = false,
  className,
  progressClassName,
  style,
  progressStyle,
}) => {
  const progressValue = useSharedValue(0);
  const indeterminatePosition = useSharedValue(0);

  // Normalizar progreso (soporta 0-1 y 0-100)
  const normalizedProgress = progress > 1 ? progress / 100 : progress;
  const clampedProgress = Math.max(0, Math.min(1, normalizedProgress));

  useEffect(() => {
    if (isLoading) {
      // Animación indefinida: la barra se mueve de izquierda a derecha
      indeterminatePosition.value = withRepeat(
        withTiming(1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false
      );
    } else {
      // Animación de progreso determinado
      progressValue.value = withSpring(clampedProgress, {
        damping: 15,
        stiffness: 100,
      });
    }
  }, [isLoading, clampedProgress, indeterminatePosition, progressValue]);

  const progressAnimatedStyle = useAnimatedStyle(() => {
    if (isLoading) {
      // Para la animación indefinida, la barra tiene un ancho fijo y se mueve
      const width = 0.3; // 30% del ancho total
      const translateX = indeterminatePosition.value * (1 + width);

      return {
        width: `${width * 100}%`,
        transform: [{ translateX: (translateX - width) * 100 * 3.33 }], // Multiplicar para compensar el porcentaje
      };
    } else {
      // Para progreso determinado, el ancho crece
      return {
        width: `${progressValue.value * 100}%`,
      };
    }
  });

  return (
    <View
      className={cn(
        'h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden',
        className
      )}
      style={style}>
      <Animated.View
        className={cn('h-full bg-primary rounded-full', progressClassName)}
        style={[progressStyle, progressAnimatedStyle]}
      />
    </View>
  );
};

export default LinearProgressBar;
