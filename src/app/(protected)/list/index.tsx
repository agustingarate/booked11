import HomeListScreen from '@home/presentation/HomeListScreen';
import { useRouter } from 'expo-router';
import React from 'react';

export default function HomeListRoute() {
  const router = useRouter();

  return (
    <HomeListScreen
      onPressItem={(id) =>
        router.push({
          // La ruta física es: app/list/[id].tsx -> URL: /list/[id]
          pathname: '/list/[id]',
          params: { id },
        })
      }
    />
  );
}
