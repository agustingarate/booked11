import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { ResolverProvider } from '@common/domain/hooks/Resolver';
import '@common/presentation/i18n';
import { QueryClientProvider } from '@common/presentation/providers/QueryClientProvider';
import { registerDependencies, resolver } from '@main/domain/di/Register';
import { useAuthStore } from '@main/domain/store';
import '../../global.css';

// Mantiene el splash screen visible hasta que lo ocultemos manualmente
void SplashScreen.preventAutoHideAsync();

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

  useEffect(() => {
    // Register all dependencies when the app starts
    registerDependencies();

    // Espera a que el store de auth se hidrate desde AsyncStorage
    // Esto es necesario porque Zustand con persistencia carga los datos de forma asíncrona
    const unsubscribe = useAuthStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });

    // Si ya está hidratado (por ejemplo, en recargas rápidas), marca como listo
    if (useAuthStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }

    return unsubscribe;
  }, []);

  // Oculta el splash screen una vez que el store esté hidratado
  useEffect(() => {
    if (isHydrated) {
      void SplashScreen.hideAsync();
    }
  }, [isHydrated]);

  return (
    <ResolverProvider resolver={resolver}>
      <QueryClientProvider>
        <Slot />
      </QueryClientProvider>
    </ResolverProvider>
  );
}
