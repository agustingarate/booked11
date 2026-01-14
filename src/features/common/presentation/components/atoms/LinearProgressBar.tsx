import React, { useEffect, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { View } from 'react-native';
import Animated, {
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

  const [currentProgress, setCurrentProgress] = useState(0);
  const indeterminatePosition = useSharedValue(0);

  useEffect(() => {
    if (isLoading) {
      indeterminatePosition.value = withRepeat(
        withTiming(1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        false
      );
    } else {
      setCurrentProgress(clampedProgress);
    }
  }, [isLoading, clampedProgress, indeterminatePosition]);

  const progressAnimatedStyle = useAnimatedStyle(() => {
    if (isLoading) {
      const width = 0.3;
      const translateX = indeterminatePosition.value * (1 + width);

      return {
        width: `${width * 100}%`,
        transform: [{ translateX: (translateX - width) * 100 * 3.33 }],
      };
    }
    return {};
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
          style={[progressStyle, progressAnimatedStyle]}
        />
      ) : (
        <View
          className={cn(
            'h-full bg-primary rounded-full transition-all duration-300 origin-left',
            progressClassName
          )}
          style={[progressStyle, { width: `${currentProgress * 100}%` }]}
        />
      )}
    </View>
  );
};

export default LinearProgressBar;
