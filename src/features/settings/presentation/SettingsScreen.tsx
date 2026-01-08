import React from 'react';
import { Text, View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 p-6 bg-gray-50 justify-center">
      <Text className="text-2xl font-semibold mb-1">Settings feature</Text>
      <Text className="text-sm text-gray-600">
        Otra feature de ejemplo para mostrar cómo se enlaza desde la capa de
        rutas.
      </Text>
    </View>
  );
}
