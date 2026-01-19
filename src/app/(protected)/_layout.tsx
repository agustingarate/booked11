import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@main/domain/store';

export default function ProtectedLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
