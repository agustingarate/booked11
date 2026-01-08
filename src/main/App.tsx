
//TODO Esta configuración se trasladria a _layout.tsx de app

// /* eslint-disable @typescript-eslint/require-await */
// import type { FontSource } from "expo-font";
// import type { JSX } from "react";
// import React, { useCallback, useEffect, useState } from "react";
// import { Platform, View } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { Host } from "react-native-portalize";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StyleSheet } from "react-native-unistyles";
// import { useFonts } from "expo-font";
// import * as NavigationBar from "expo-navigation-bar";
// import * as Notifications from "expo-notifications";
// import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import { ActionSheetProvider } from "@expo/react-native-action-sheet";
// import * as Sentry from "@sentry/react-native";
// import { I18nextProvider } from "react-i18next";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// import { GenericToast } from "@sanlorenzo/ui";

// import type { RootState } from "./domain/store/Store";
// import type { NotificationState } from "./utils/notifications";
// import { setExpoPushToken } from "~/features/common/domain/store/AppSlice";
// import { notificationsStatusChange } from "~/features/notifications/domain/store/NotificationsSlice";
// import { ResolverProvider } from "../features/common/domain/hooks/Resolver";
// import i18n from "../features/common/presentation/i18n";
// import { initSentry } from "./config/sentry";
// import { resolver } from "./domain/di/Register";
// import { persistor, store } from "./domain/store/Store";
// import { Router } from "./presentation/screens/Router";
// import { useAppViewModel } from "./presentation/viewModels/AppViewModel";
// import { debug } from "./utils/logger";
// import {
//   setupNotificationListeners,
//   setupNotifications,
// } from "./utils/notifications";

// initSentry();

// if (Platform.OS === "android") {
//   NavigationBar.setStyle("auto");
// }
// void SplashScreen.preventAutoHideAsync();

// Notifications.setNotificationHandler({
//   handleNotification: async () => {
//     return {
//       shouldPlaySound: true,
//       shouldSetBadge: true,
//       shouldShowBanner: true,
//       shouldShowList: true,
//     };
//   },
// });

// const AppContent = (): JSX.Element | null => {
//   const dispatch = useDispatch();
//   const userToken = useSelector((state: RootState) => state.app.token);
//   const lastExpoPushToken = useSelector(
//     (state: RootState) => state.app.expoPushToken,
//   );
//   const { initializeNotifications } = useAppViewModel();

//   const [fontsLoaded, error] = useFonts({
//     DMSans: require("../../assets/fonts/DMSans-Regular.ttf") as FontSource,
//     "DMSans-Medium":
//       require("../../assets/fonts/DMSans-Medium.ttf") as FontSource,
//     "DMSans-Semibold":
//       require("../../assets/fonts/DMSans-SemiBold.ttf") as FontSource,
//   });

//   const [notificationState, setNotificationState] = useState<NotificationState>(
//     {
//       expoPushToken: "",
//       notification: undefined,
//     },
//   );

//   const hideSplashScreen = useCallback(async () => {
//     if (fontsLoaded && !error) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, error]);

//   useEffect(() => {
//     void hideSplashScreen();
//   }, [hideSplashScreen]);

//   useEffect(() => {
//     debug("[App] 🔄 Iniciando setup de notificaciones...");

//     setupNotifications()
//       .then((token) => {
//         debug("[App] ✅ Token obtenido:", token);
//         setNotificationState((prev) => ({ ...prev, expoPushToken: token }));
//       })
//       .catch((error) => {
//         debug("[App] ❌ Error obteniendo token:", error);
//       });

//     const cleanup = setupNotificationListeners(
//       (notification) => {
//         setNotificationState((prev) => ({ ...prev, notification }));
//         store.dispatch(notificationsStatusChange({ statusChanged: true }));
//       },
//       (response) => {
//         debug("[App] 👆 Respuesta a notificación:", JSON.stringify(response));
//       },
//     );

//     return cleanup;
//   }, []);

//   useEffect(() => {
//     const currentToken = notificationState.expoPushToken;

//     if (!currentToken || !userToken) {
//       return;
//     }

//     if (currentToken === lastExpoPushToken) {
//       debug("[App] ✅ Token ya sincronizado");
//       return;
//     }

//     debug("[App] 🚀 Sincronizando token nuevo/cambiado");

//     dispatch(setExpoPushToken({ expoPushToken: currentToken }));

//     initializeNotifications(currentToken)
//       .then(() => {
//         debug("[App] ✅ Token sincronizado exitosamente");
//       })
//       .catch((error) => {
//         debug("[App] ❌ Error sincronizando token:", error);
//       });
//   }, [
//     notificationState.expoPushToken,
//     lastExpoPushToken,
//     userToken,
//     dispatch,
//     initializeNotifications,
//   ]);

//   if (!fontsLoaded && !error) {
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />

//       <Router />

//       <GenericToast />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <Host>
//           <ActionSheetProvider>
//             <SafeAreaProvider>
//               <Provider store={store}>
//                 <ResolverProvider resolver={resolver}>
//                   <PersistGate loading={null} persistor={persistor}>
//                     <AppContent />
//                   </PersistGate>
//                 </ResolverProvider>
//               </Provider>
//             </SafeAreaProvider>
//           </ActionSheetProvider>
//         </Host>
//       </GestureHandlerRootView>
//     </I18nextProvider>
//   );
// };

// const styles = StyleSheet.create((_) => ({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
// }));

// export default Sentry.wrap(App);
