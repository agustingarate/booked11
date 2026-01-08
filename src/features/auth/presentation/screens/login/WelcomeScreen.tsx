// import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// import type { FC } from "react";
// import type { ImageSourcePropType } from "react-native";
// import { Image, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StyleSheet } from "react-native-unistyles";

// import { SLButton } from "@sanlorenzo/ui";

// import type { ParamList } from "../../AuthStack";
// import { useI18n } from "~/features/common/domain/hooks/i18n";

// type Props = NativeStackScreenProps<ParamList, "welcomeScreen">;

// const WelcomeScreen: FC<Props> = ({ navigation }) => {
//   const { t } = useI18n();

//   const onLogin = () => {
//     navigation.navigate("loginScreen");
//   };

//   const onSignup = () => {
//     navigation.navigate("registerScreen");
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Image
//         style={styles.logo}
//         source={
//           require("@assets/images/horizontal-logo.png") as ImageSourcePropType
//         }
//       />
//       <Text style={styles.title}>{t("loginScreen.title")}</Text>
//       <View style={styles.buttons}>
//         <SLButton.primary text={t("loginScreen.login")} onPress={onLogin} />
//         <SLButton.secondary text={t("loginScreen.signup")} onPress={onSignup} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create((theme) => ({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//     padding: 24,
//     justifyContent: "flex-end",
//     gap: theme.paddings.md2,
//   },
//   logo: {
//     width: 150,
//     height: 70,
//     resizeMode: "contain",
//   },
//   title: {
//     ...theme.typography.labelStyles.h2,
//     color: theme.colors.blue[600],
//   },
//   buttons: {
//     gap: 12,
//   },
// }));

// export default WelcomeScreen;
