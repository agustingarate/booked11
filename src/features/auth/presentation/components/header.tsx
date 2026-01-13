import { MaterialIcons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { useI18n } from '@main/index';
import { theme } from '@main/theme';

const Header = () => {
  const { t } = useI18n();
  return (
    <View className="items-center gap-4">
      <View className="bg-primary-900 rounded-lg p-7 border-[1px] border-primary-700">
        <MaterialIcons
          name="picture-as-pdf"
          size={45}
          color={theme.colors.primary.DEFAULT}
        />
      </View>

      <View className="items-center gap-2">
        <Text className="typo-title-lg text-primary-300 text-center">
          {t('loginScreen.title')}
        </Text>
        <View className="h-1 w-16 bg-primary-500 z-40 rounded-sm" />
      </View>
    </View>
  );
};

export { Header };
