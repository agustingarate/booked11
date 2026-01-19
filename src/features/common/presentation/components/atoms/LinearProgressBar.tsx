import React, { useEffect } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { cn } from '@common/utils/cn';

export interface LinearProgressBarProps {
  progress?: number;
  isLoading?: boolean;
  className?: string;
  progressClassName?: string;
  style?: ViewStyle;
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
  // Normalizar progreso (soporta 0-1 y 0-100)
  const normalizedProgress = progress > 1 ? progress / 100 : progress;
  const clampedProgress = Math.max(0, Math.min(1, normalizedProgress));

  // Shared values para las animaciones
  const animatedProgress = useSharedValue(0);
  const indeterminatePosition = useSharedValue(0);

  useEffect(() => {
    if (isLoading) {
      // Iniciar animación indeterminada
      indeterminatePosition.value = withRepeat(
        withTiming(1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false
      );
    } else {
      // Detener animación indeterminada
      cancelAnimation(indeterminatePosition);
      indeterminatePosition.value = 0;
    }
  }, [indeterminatePosition, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      // Animar el progreso solo cuando no está en loading
      animatedProgress.value = withTiming(clampedProgress, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });
    }
  }, [isLoading, clampedProgress, animatedProgress]);

  const indeterminateStyle = useAnimatedStyle(() => {
    const width = 0.3;
    const translateX = indeterminatePosition.value * (1 + width);

    return {
      width: `${width * 100}%`,
      transform: [{ translateX: (translateX - width) * 100 * 3.33 }],
    };
  });

  const determinateStyle = useAnimatedStyle(() => {
    return {
      width: `${animatedProgress.value * 100}%`,
    };
  });

  return (
    <View
      className={cn(
        'h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden',
        className
      )}
      style={style}>
      {isLoading ? (
        <Animated.View
          className={cn('h-full bg-primary rounded-full', progressClassName)}
          style={[progressStyle, indeterminateStyle]}
        />
      ) : (
        <Animated.View
          className={cn('h-full bg-primary rounded-full', progressClassName)}
          style={[progressStyle, determinateStyle]}
        />
      )}
    </View>
  );
};

export default LinearProgressBar;
