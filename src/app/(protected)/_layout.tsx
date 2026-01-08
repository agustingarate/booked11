import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@main/domain/store';

/**
 * Layout para rutas protegidas.
 *
 * Usa el patrón recomendado de Expo Router: simplemente redirige si no está autenticado.
 * Expo Router maneja automáticamente la navegación.
 */
export default function ProtectedLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return <Stack screenOptions={{ headerShown: true }} />;
}
