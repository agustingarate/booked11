import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { theme } from '@common/presentation/theme';

const FileThumbnail = () => {
  return (
    <View
      className="relative shrink-0 rounded-xs bg-gray-50 dark:bg-slate-800 h-full w-full items-center justify-center"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: -7, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 6,
      }}>
      <Ionicons
        name="document-text-outline"
        size={70}
        color={theme.colors.info[500]}
      />
    </View>
  );
};

export default FileThumbnail;
