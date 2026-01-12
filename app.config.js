const getApiConfig = () => {
  const releaseChannel = process.env.EXPO_PUBLIC_RELEASE_CHANNEL;

  //this variables are used with eas commands (EAS build, etc), and they are defined in the eas dashboard.

  if (releaseChannel?.includes('uat')) {
    return {
      apiUrl: process.env.EXPO_PUBLIC_UAT_API_URL,
    };
  }

  if (releaseChannel?.includes('production')) {
    return {
      apiUrl: process.env.EXPO_PUBLIC_PROD_API_URL,
    };
  }

  return {
    apiUrl: process.env.EXPO_PUBLIC_STG_API_URL,
  };
};

module.exports = {
  expo: {
    name: 'booked11',
    slug: 'booked11',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'booked11',
    userInterfaceStyle: 'automatic',
    runtimeVersion: {
      policy: 'appVersion',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.booked11.app',
      associatedDomains: [],
      appleTeamId: '',
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      package: 'com.booked11.app',
      adaptiveIcon: {
        backgroundColor: '#E6F4FE',
        foregroundImage: './assets/images/android-icon-foreground.png',
        backgroundImage: './assets/images/android-icon-background.png',
        monochromeImage: './assets/images/android-icon-monochrome.png',
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      intentFilters: [],
    },
    web: {
      output: 'static',
      favicon: './assets/images/favicon.png',
      bundler: 'metro',
    },
    extra: {
      eas: {
        projectId: 'aa0c0fb1-6405-4361-92b9-65e12b8f62a3',
      },
      apiConfig: getApiConfig(),
    },
    plugins: [
      'expo-router',
      ['expo-font'],
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          dark: {
            backgroundColor: '#000000',
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
