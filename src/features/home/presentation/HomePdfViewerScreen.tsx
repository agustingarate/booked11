import React from 'react';
import { View } from 'react-native';

import { usePdfViewerViewModel } from './viewModels/PdfViewerViewModel';

import PDFViewer from '@common/presentation/components/organisms/PDFViewer';

type Props = {
  pdfId: string;
};

export default function HomePdfViewerScreen({ pdfId }: Props) {
  const { isLoading, pdf, error, loadPdf, updateProgress, deletePdf } =
    usePdfViewerViewModel(pdfId);
  return (
    <View className="flex-1 ">
      <PDFViewer source={{ uri: pdf?.url }} />
    </View>
  );
}
