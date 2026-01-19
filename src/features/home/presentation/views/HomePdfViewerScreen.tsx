import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';

import { usePdfViewerViewModel } from '../viewModels/PdfViewerViewModel';

import PDFViewer from '@common/presentation/components/organisms/PDFViewer';

type Props = {
  pdfId: string;
};

export default function HomePdfViewerScreen({ pdfId }: Props) {
  const { isLoading, pdf, error, loadPdf, updateProgress, deletePdf } =
    usePdfViewerViewModel(pdfId);

    const { setOptions } = useNavigation();

    useEffect(() => {
      setOptions({
        headerShown: true,
        headerTitle: pdf?.fileName ?? 'Cargando...',
        headerBackTitle: 'Back',
      });
    }, []);
  return (
    <View className="flex-1 ">
      <PDFViewer source={{ uri: pdf?.url }} />
    </View>
  );
}
