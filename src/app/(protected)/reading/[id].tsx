import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

import HomePdfViewerScreen from '@home/presentation/HomePdfViewerScreen';

type Params = {
  id?: string;
};

export default function HomeDetailRoute() {
  const { id } = useLocalSearchParams<Params>();
  const { back } = useRouter();

  if (!id) {
    back();
    return null;
  }

  return <HomePdfViewerScreen pdfId={id} />;
}
