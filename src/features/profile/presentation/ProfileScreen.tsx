import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useAuthStore } from '@features/auth/domain/store/authStore';

/**
 * Pantalla de perfil que muestra información del usuario y permite hacer logout.
 *
 * Este componente es un ejemplo de cómo usar el store de auth desde una feature.
 */
export default function ProfileScreen() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const clearAuthData = useAuthStore((state) => state.clearAuthData);

  const handleLogout = () => {
    clearAuthData();
    router.replace('/auth/login');
  };

  return (
    <View className="flex-1 p-6 bg-gray-50">
      <Text className="text-2xl font-semibold mb-1">Perfil</Text>
      <Text className="text-sm text-gray-600 mb-6">
        Ejemplo de otra feature independiente, con su propia pantalla de
        presentación.
      </Text>

      {user && (
        <View className="bg-white p-4 rounded-lg mb-4">
          <Text className="text-base font-semibold mb-2 text-gray-800">
            Información del usuario:
          </Text>
          <Text className="text-sm text-gray-600 mb-1">ID: {user.id}</Text>
          <Text className="text-sm text-gray-600 mb-1">
            Email: {user.email}
          </Text>
          <Text className="text-sm text-gray-600 mb-1">
            Nombre: {user.firstName} {user.lastName}
          </Text>
        </View>
      )}

      {token && (
        <View className="bg-white p-4 rounded-lg mb-4">
          <Text className="text-base font-semibold mb-2 text-gray-800">
            Token (primeros 20 caracteres):
          </Text>
          <Text className="text-xs text-gray-500 font-mono">
            {token.substring(0, 20)}...
          </Text>
        </View>
      )}

      <TouchableOpacity
        className="bg-red-600 p-4 rounded-lg items-center mt-auto"
        onPress={handleLogout}>
        <Text className="text-white text-base font-semibold">
          Cerrar Sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
