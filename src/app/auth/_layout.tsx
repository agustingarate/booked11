import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@main/domain/store';

/**
 * Layout para rutas de autenticación.
 *
 * Si el usuario ya está autenticado, redirige a las rutas protegidas.
 */
export default function AuthLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Si ya está autenticado, redirige a las rutas protegidas
  if (isAuthenticated) {
    return <Redirect href="/(protected)/(tabs)/home" />;
  }

  return <Stack />;
}
