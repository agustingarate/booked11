import { LinearGradient } from 'expo-linear-gradient';
import type { FC } from 'react';
import { Text, View } from 'react-native';

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
}

const FileComponent: FC<FileComponentProps> = ({
  title,
  description,
  progress,
}) => {
  return (
    <View className="w-40 gap-2">
      <View className="bg-gray-200 p-6 rounded-lg h-60 relative">
        <FileThumbnail />
        <View className="absolute bottom-0 left-0 right-0 p-2 z-50 gap-1">
          <LinearProgressBar
            progress={progress?.numberProgress}
            className="h-1"
          />
          <Text className="typo-label-sm  text-primary-50">
            {progress?.semanticProgress}
          </Text>
        </View>
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

      <View className="">
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
    </View>
  );
};

export default FileComponent;
