import { Redirect } from 'expo-router';
import 'expo-router/entry';

import { useAuthStore } from '@main/domain/store';

/**
 * Componente de índice que maneja la redirección inicial.
 *
 * Redirige según el estado de autenticación:
 * - Si está autenticado: redirige a la página principal protegida
 * - Si no está autenticado: redirige al login
 *
 * Nota: La hidratación del store se maneja automáticamente por Zustand.
 * Si necesitas mostrar un loading durante la hidratación, puedes usar
 * useAuthStore.persist.hasHydrated() en el root layout.
 */
export default function Index() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // Redirige según el estado de autenticación
  if (isAuthenticated) {
    return <Redirect href="/(protected)/(tabs)/home" />;
  }

  return <Redirect href="/auth/login" />;
}
