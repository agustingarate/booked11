import HomeDetailScreen from '@home/presentation/HomeDetailScreen';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

type Params = {
  id?: string;
};

export default function HomeDetailRoute() {
  const { id } = useLocalSearchParams<Params>();

  if (!id) {
    return <Text>Falta el parámetro id.</Text>;
  }

  return <HomeDetailScreen id={id} />;
}
