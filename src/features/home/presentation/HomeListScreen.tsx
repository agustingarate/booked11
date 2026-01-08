import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';

type Item = {
  id: string;
  title: string;
};

type Props = {
  onPressItem: (id: string) => void;
};

const DATA: Item[] = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export default function HomeListScreen({ onPressItem }: Props) {
  return (
    <View className="flex-1 p-6 bg-gray-50">
      <Text className="text-2xl font-semibold mb-1">Home list (feature)</Text>
      <Text className="text-sm text-gray-600 mb-4">
        Esta pantalla vive en `features/home/presentation` y recibe callbacks
        desde la capa de rutas.
      </Text>

      <FlatList
        className="mt-2"
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="p-4 rounded-lg bg-white mb-3 shadow-sm"
            onPress={() => onPressItem(item.id)}>
            <Text className="text-base font-medium">{item.title}</Text>
            <Text className="text-xs text-gray-500 mt-1">
              Toca para ver detalle
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
