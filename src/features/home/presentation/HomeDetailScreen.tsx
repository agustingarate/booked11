import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  id: string;
};

export default function HomeDetailScreen({ id }: Props) {
  return (
    <View className="flex-1 p-6 bg-gray-50">
      <Text className="text-2xl font-semibold mb-1">Detalle de Home</Text>
      <Text className="text-sm text-gray-600 mb-4">
        Esta es una pantalla de detalle de la feature{' '}
        <Text className="font-semibold">home</Text>.
      </Text>

      <View className="p-4 rounded-lg bg-white shadow-sm">
        <Text className="text-sm text-gray-500">ID recibido como parámetro de ruta:</Text>
        <Text className="mt-2 text-lg font-medium">{id}</Text>
      </View>
    </View>
  );
}
