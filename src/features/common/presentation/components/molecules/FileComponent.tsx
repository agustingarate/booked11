import { LinearGradient } from 'expo-linear-gradient';
import type { FC } from 'react';
import type { DimensionValue } from 'react-native';
import { Pressable, Text, View } from 'react-native';

import FileThumbnail from '../atoms/FileThumbnail';
import LinearProgressBar from '../atoms/LinearProgressBar';

import { theme } from '@common/presentation/theme';

interface FileComponentProps {
  title?: string;
  description?: string;
  progress?: {
    numberProgress: number;
    semanticProgress: string;
  };
  onPress?: () => void;
  width?: DimensionValue;
}

const FileComponent: FC<FileComponentProps> = ({
  title,
  description,
  progress,
  onPress,
  width,
}) => {
  const containerStyle = width ? { width } : undefined;

  const content = (
    <>
      <View className="bg-gray-200 p-6 rounded-lg h-60 relative">
        <FileThumbnail />
        {progress && (
          <View className="absolute bottom-0 left-0 right-0 p-2 z-50 gap-1">
            <LinearProgressBar
              progress={progress.numberProgress}
              className="h-1"
            />
            <Text className="typo-label-sm text-primary-50">
              {progress.semanticProgress}
            </Text>
          </View>
        )}
        <LinearGradient
          colors={[theme.colors.primary[50], theme.colors.primary[900]]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            overflow: 'hidden',
            borderRadius: 12,
          }}
        />
      </View>

      <View>
        <Text
          numberOfLines={2}
          className="typo-overline text-primary-50">
          {title}
        </Text>
        <Text
          numberOfLines={1}
          className="typo-caption text-ring-focus">
          {description}
        </Text>
      </View>
    </>
  );

  return (
    <Pressable
      onPress={onPress}
      className="gap-2 active:opacity-80"
      style={containerStyle}>
      {content}
    </Pressable>
  );
};

export default FileComponent;
