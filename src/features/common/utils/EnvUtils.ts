import Constants from "expo-constants";

export interface EnvConfig {
  apiUrl: string;
  macroCallbackError: string;
  macroCallbackSuccess: string;
  macroCommerceId: string;
  macroSecret: string;
  macroUrl: string;
}

export const getEnvConfig = Constants.expoConfig?.extra?.apiConfig as EnvConfig;
