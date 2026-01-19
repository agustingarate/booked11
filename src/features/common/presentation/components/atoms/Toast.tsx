import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { tv } from 'tailwind-variants';

type GenericToastType = 'success' | 'error';

interface CustomToastProps {
  uniqueKey?: string;
  title: string;
  config: GenericToastType;
  duration?: number; /// milliseconds
}

interface ToastConfigProps {
  config: GenericToastType;
  duration?: number;
}

const CustomToast: React.FC<CustomToastProps> = ({ title, config }) => {
  const { top } = useSafeAreaInsets();

  const containerStyle = tv({
    base: `w-full p-4 flex-row justify-between items-center`,
    variants: {
      type: {
        success: 'bg-success-600',
        error: 'bg-error-500',
      },
    },
  });
  return (
    <View
      className={containerStyle({ type: config })}
      style={{ paddingTop: top + 16 }}>
      <Text className="text-white typo-body-sm">{title}</Text>
      <Pressable onPress={() => Toast.hide()}>
        {/* <Image style={styles.icon} source={IconX} /> */}
      </Pressable>
    </View>
  );
};

const GenericToast: React.FC = () => {
  const getToast = ({
    text1,
    props,
  }: {
    text1?: string;
    props?: ToastConfigProps;
  }) => (
    <CustomToast
      title={text1 ?? ''}
      config={props?.config ?? 'success'}
      duration={props?.duration}
      uniqueKey={new Date().getTime().toString()}
    />
  );
  return (
    <Toast
      config={{
        toast: getToast,
      }}
      // topOffset={Platform.OS === "ios" ? 60 : 40}
      topOffset={0}
    />
  );
};

const ShowToast = ({ config, title, duration }: CustomToastProps) => {
  const visibilityDuration = duration ?? 4000;
  Toast.show({
    type: 'toast',
    text1: title,
    visibilityTime: visibilityDuration,
    props: { config, duration: visibilityDuration },
  });
};

export { GenericToast, ShowToast };

export type { GenericToastType };
