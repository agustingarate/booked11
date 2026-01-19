
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { ResolverProvider } from '@common/domain/hooks/Resolver';
import { GenericToast } from '@common/presentation/components/atoms/Toast';
import '@common/presentation/i18n';
import { QueryClientProvider } from '@common/presentation/providers/QueryClientProvider';
import { registerDependencies, resolver } from '@main/domain/di/Register';
import { useAuthStore } from '@main/domain/store';

import '../../global.css';

// Mantiene el splash screen visible hasta que lo ocultemos manualmente
if (Platform.OS !== 'web') {
  void SplashScreen.preventAutoHideAsync();
}

/**
 * Root layout component that wraps the entire application with necessary providers.
 *
 * This component:
 * - Registers all application dependencies
 * - Provides the dependency injection resolver
 * - Provides React Query client for data fetching
 * - Waits for auth store hydration before hiding splash screen
 *
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout() {
  const [isHydrated, setIsHydrated] = useState(false);

  const [loaded, error] = useFonts({
    // Lexend - Fuente principal (display y sans)
    'Lexend-Thin': require('../../assets/fonts/Lexend-Thin.ttf'),
    'Lexend-ExtraLight': require('../../assets/fonts/Lexend-ExtraLight.ttf'),
    'Lexend-Light': require('../../assets/fonts/Lexend-Light.ttf'),
    'Lexend-Regular': require('../../assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('../../assets/fonts/Lexend-Medium.ttf'),
    'Lexend-SemiBold': require('../../assets/fonts/Lexend-SemiBold.ttf'),
    'Lexend-Bold': require('../../assets/fonts/Lexend-Bold.ttf'),
    'Lexend-ExtraBold': require('../../assets/fonts/Lexend-ExtraBold.ttf'),
    'Lexend-Black': require('../../assets/fonts/Lexend-Black.ttf'),

    // Noto Sans - Fuente para body
    'NotoSans-ExtraLight': require('../../assets/fonts/NotoSans-ExtraLight.ttf'),
    'NotoSans-Light': require('../../assets/fonts/NotoSans-Light.ttf'),
    'NotoSans-Regular': require('../../assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Medium': require('../../assets/fonts/NotoSans-Medium.ttf'),
    'NotoSans-SemiBold': require('../../assets/fonts/NotoSans-SemiBold.ttf'),
    'NotoSans-Bold': require('../../assets/fonts/NotoSans-Bold.ttf'),
    'NotoSans-ExtraBold': require('../../assets/fonts/NotoSans-ExtraBold.ttf'),
    'NotoSans-Black': require('../../assets/fonts/NotoSans-Black.ttf'),
  });

  useEffect(() => {
    // Register all dependencies when the app starts
    registerDependencies();

    const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });

    if (useAuthStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (isHydrated && (loaded || error) && Platform.OS !== 'web') {
      void SplashScreen.hideAsync();
    }
  }, [isHydrated, loaded, error]);

  if (!isHydrated || (!loaded && !error)) {
    return null;
  }

  return (
    <ResolverProvider resolver={resolver}>
      <ActionSheetProvider>
        <QueryClientProvider>
          <Slot />
          <GenericToast />
        </QueryClientProvider>
      </ActionSheetProvider>
    </ResolverProvider>
  );
}
