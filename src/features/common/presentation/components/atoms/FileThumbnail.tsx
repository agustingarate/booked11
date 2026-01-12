import { View } from 'react-native';

const FileThumbnail = () => {
  return (
    <View
      className="relative shrink-0 rounded-xs bg-gray-50 dark:bg-slate-800 h-full w-full"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: -7, height: 7 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 6,
      }}
    />
  );
};

export default FileThumbnail;
