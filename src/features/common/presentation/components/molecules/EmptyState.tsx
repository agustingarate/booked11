import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { theme } from '@common/presentation/theme';

interface EmptyStateProps {
  title: string;
  description: string;
  className?: string;
}

export const EmptyState = ({
  title,
  description,
  className,
}: EmptyStateProps) => {
  return (
    <View className={`${className} items-center gap-3`}>
      <Ionicons
        name="sad-outline"
        size={40}
        color={theme.colors.text.muted}
      />
      <View className="gap-0">
        <Text className="typo-subtitle text-text-muted mb-2 text-center">
          {title}
        </Text>
        <Text className="typo-body-sm text-text-muted text-center">
          {description}
        </Text>
      </View>
    </View>
  );
};
