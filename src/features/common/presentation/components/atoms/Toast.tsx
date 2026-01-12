import Toast from 'react-native-toast-message';

// type GenericToastType = 'success' | 'error';

// interface CustomToastProps {
//   uniqueKey?: string;
//   title: string;
//   config: GenericToastType;
//   duration?: number; /// milliseconds
// }

// interface ToastConfigProps {
//   config: GenericToastType;
//   duration?: number;
// }

// const CustomToast: React.FC<CustomToastProps> = ({ title, config }) => {
//   styles.useVariants({ type: config });
//   const { top } = useSafeAreaInsets();
//   return (
//     <View style={styles.container(top)}>
//       <Text style={styles.text}>{title}</Text>
//       <Pressable onPress={() => Toast.hide()}>
//         {/* <Image style={styles.icon} source={IconX} /> */}
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create((theme) => ({
//   container: (top: number) => ({
//     width: '100%',
//     padding: theme.spacing.md as number,
//     paddingTop: top,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     variants: {
//       type: {
//         success: {
//           backgroundColor: theme.colors.blue[600],
//         },
//         error: {
//           backgroundColor: theme.colors.red[500],
//         },
//       },
//     },
//   }),
//   text: {
//     ...theme.typography.labelStyles['body-regular'],
//     color: theme.colors.white,
//   },
//   icon: {
//     width: theme.typography.fontSizes['2lg'] as number,
//     height: theme.typography.fontSizes['2lg'] as number,
//   },
// }));

// const GenericToast: React.FC = () => {
//   return (
//     <Toast
//       config={{
//         conexiaToast: ({
//           text1,
//           props,
//         }: {
//           text1?: string;
//           props?: ToastConfigProps;
//         }) => (
//           <CustomToast
//             title={text1 ?? ''}
//             config={props?.config ?? 'success'}
//             duration={props?.duration}
//             uniqueKey={new Date().getTime().toString()}
//           />
//         ),
//       }}
//       // topOffset={Platform.OS === "ios" ? 60 : 40}
//       topOffset={0}
//     />
//   );
// };

// const ShowToast = ({ config, title, duration }: CustomToastProps) => {
//   const visibilityDuration = duration ?? 4000;
//   Toast.show({
//     type: 'conexiaToast',
//     text1: title,
//     visibilityTime: visibilityDuration,
//     props: { config, duration: visibilityDuration },
//   });
// };

// export { GenericToast, ShowToast };
const ShowToast = () => {
  return <Toast />;
};
export { ShowToast };
// export type { GenericToastType };
