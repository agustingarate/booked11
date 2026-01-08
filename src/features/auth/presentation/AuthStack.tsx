// import type { ParamListBase } from "@react-navigation/native";
// import type { FC } from "react";
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginScreen from "./screens/login/LoginScreen";
// import WelcomeScreen from "./screens/login/WelcomeScreen";
// import { RecoverEmailResultScreen } from "./screens/recoverEmail/RecoverEmailResultScreen";
// import RecoverEmailScreen from "./screens/recoverEmail/RecoverEmailScreen";
// import SendEmailScreen from "./screens/recoverPassword/1_SendEmailScreen";
// import ValidateCodeScreen from "./screens/recoverPassword/2_ValidateCodeScreen";
// import NewPasswordScreen from "./screens/recoverPassword/3_NewPasswordScreen";
// import { ResultScreen } from "./screens/recoverPassword/4_ResultScreen";
// import { RegisterMainScreen } from "./screens/register/RegisterMainScreen";
// import { VerificationCodeScreen } from "./screens/register/steps/4_VerificationCodeScreen";
// import { RegisterSuccessScreen } from "./screens/register/steps/5_ResultScreen";

// interface ParamList extends ParamListBase {
//   welcomeScreen: undefined;
//   loginScreen: undefined;
//   recoverEmailScreen: undefined;
//   sendEmailScreen: undefined;
//   validateCodeScreen: {
//     email: string;
//   };
//   newPasswordScreen: {
//     email: string;
//     code: string;
//   };
//   registerScreen: undefined;
//   registerSuccessScreen: undefined;
//   recoverPasswordResultScreen: {
//     success: boolean;
//   };
//   verificationCodeScreen: {
//     email: string;
//     flow: "register" | "login";
//   };

//   recoverPasswordScreen: {
//     email?: string;
//   };
//   recoverEmailResultScreen: {
//     email: string;
//   };
// }

// const Stack = createNativeStackNavigator<ParamList>();

// const AuthStack: FC = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="welcomeScreen"
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
//       <Stack.Screen name="loginScreen" component={LoginScreen} />
//       <Stack.Screen name="recoverEmailScreen" component={RecoverEmailScreen} />
//       <Stack.Screen name="registerScreen" component={RegisterMainScreen} />
//       <Stack.Screen name="sendEmailScreen" component={SendEmailScreen} />
//       <Stack.Screen
//         name="validateCodeScreen"
//         component={ValidateCodeScreen} //recover password
//       />
//       <Stack.Screen name="newPasswordScreen" component={NewPasswordScreen} />
//       <Stack.Screen
//         name="recoverPasswordResultScreen"
//         component={ResultScreen}
//         initialParams={{ success: true }}
//       />
//       <Stack.Screen
//         name="recoverEmailResultScreen"
//         component={RecoverEmailResultScreen}
//       />
//       <Stack.Screen
//         name="verificationCodeScreen"
//         component={VerificationCodeScreen}
//       />
//       <Stack.Screen
//         name="registerSuccessScreen"
//         component={RegisterSuccessScreen}
//       />
//     </Stack.Navigator>
//   );
// };

// export { AuthStack };
// export type { ParamList };
