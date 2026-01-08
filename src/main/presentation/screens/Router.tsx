// import type { ParamListBase } from "@react-navigation/native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { CustomBottomSheetModalProvider } from "@sanlorenzo/ui";

// import type { ProfileModifyUserFlow } from "~/features/common/data/models/Types";
// import { AnimalCareStack } from "~/features/animalCare/presentation/AnimalCareStack";
// import { AuthStack } from "~/features/auth/presentation/AuthStack";
// import { ClaimsStack } from "~/features/claims/presentation/ClaimsStack";
// import { ContactStack } from "~/features/contact";
// import HomeScreen from "~/features/home/presentation/screens/HomeScreen";
// import MenuScreen from "~/features/menu/presentation/screens/MenuScreen";
// import { MuseumsStack } from "~/features/museums";
// import { NewsStack } from "~/features/news/presentation/NewsStack";
// import { NotificationsStack } from "~/features/notifications/presentation/NotificationsStack";
// import { ProceduresStack } from "~/features/procedures";
// import { ProfileStack } from "~/features/profile/presentation/ProfileStack";
// import ProfileScreen from "~/features/profile/presentation/screens/ProfileScreen";
// import { ProfileSuccessScreen } from "~/features/profile/presentation/screens/SuccessScreen";
// import { RootTabs } from "~/features/root/presentation/screens/RootTabs";
// import { SportsStack } from "~/features/sports/presentation/SportsStack";
// import { useRouterViewModel } from "../viewModels/RouterViewModel";
// import { linking } from "./Linking";

// const HomeStack = createNativeStackNavigator<HomeParamsList>();
// const GeneralStack = createNativeStackNavigator<GeneralParamsList>();

// /**
//  * Type definition for HomeParamsList.
//  *
//  * @property {undefined} homeScreen - The home screen parameter.
//  * @property {undefined} detailScreen - The detail screen parameter.
//  * @notExported
//  */
// export type HomeParamsList = ParamListBase & {
//   rootStack: undefined;
//   detailScreen: undefined;
//   museumsStack: undefined;
//   proceduresStack: undefined;
//   claimsStack: undefined;
//   contactStack: undefined;
//   newsStack: undefined;
//   profileStack: undefined;
//   animalCareStack: undefined;
//   notificationsStack: undefined;
//   sportsStack: undefined;
// };

// export type GeneralParamsList = ParamListBase & {
//   profileSuccessScreen: {
//     flow: ProfileModifyUserFlow;
//   };
// };

// const Router = () => {
//   const { state } = useRouterViewModel();

//   if (state.loading === true) {
//     return <></>;
//   }

//   return (
//     <NavigationContainer linking={linking}>
//       <GeneralStack.Navigator screenOptions={{ headerShown: false }}>
//         {state.isLoggedIn ? (
//           <GeneralStack.Screen name="mainStack" component={HomeStackScreen} />
//         ) : (
//           <GeneralStack.Screen name="authStack" component={AuthStack} />
//         )}
//         <GeneralStack.Screen
//           name="profileSuccessScreen"
//           component={ProfileSuccessScreen}
//           initialParams={{ flow: "changeEmail" }}
//         />
//       </GeneralStack.Navigator>
//     </NavigationContainer>
//   );
// };

// const RootScreen = () => {
//   return (
//     <CustomBottomSheetModalProvider>
//       <RootTabs home={HomeScreen} menu={MenuScreen} profile={ProfileScreen} />
//     </CustomBottomSheetModalProvider>
//   );
// };

// const HomeStackScreen = () => (
//   <HomeStack.Navigator screenOptions={{ headerShown: false }}>
//     <HomeStack.Screen name="rootStack" component={RootScreen} />
//     <HomeStack.Screen name="museumsStack" component={MuseumsStack} />
//     <HomeStack.Screen name="proceduresStack" component={ProceduresStack} />
//     <HomeStack.Screen name="claimsStack" component={ClaimsStack} />
//     <HomeStack.Screen name="contactStack" component={ContactStack} />
//     <HomeStack.Screen name="animalCareStack" component={AnimalCareStack} />
//     <HomeStack.Screen name="newsStack" component={NewsStack} />
//     <HomeStack.Screen name="sportsStack" component={SportsStack} />
//     <HomeStack.Screen
//       name="profileStack"
//       component={ProfileStack}
//       options={{ animation: "slide_from_bottom" }}
//     />
//     <HomeStack.Screen
//       name="notificationsStack"
//       component={NotificationsStack}
//       options={{ animation: "fade_from_bottom" }}
//     />
//   </HomeStack.Navigator>
// );

// export { Router };
