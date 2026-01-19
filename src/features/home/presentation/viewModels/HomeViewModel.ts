import { useMemo } from 'react';

import { useUploadPdfMutation } from '../hooks/usePdfMutations';
import { usePdfListQuery } from '../hooks/usePdfQueries';

import { useDocumentPicker } from '@common/hooks/DocumentPicker/useDocumentPicker';

/**
 * ViewModel para la lista de PDFs.
 * Usa TanStack Query para manejar el estado y cache.
 */
export const useHomeViewModel = () => {
  // Usar el hook de TanStack Query
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
    error,
  } = usePdfListQuery(10);



  const uploadPdfMutation = useUploadPdfMutation();
  const { launchDocumentActionSheet } = useDocumentPicker();

  // Aplanar los PDFs de todas las páginas
  const pdfs = useMemo(() => {
    return data?.pages.flatMap((page) => page.pdfs) ?? [];
  }, [data]);

  const uplodadPdf = async () => {
    try {
      console.log('uploadPdf');
      const result = await launchDocumentActionSheet({
        type: ['application/pdf'],
      });
      const file = result?.assets?.[0];
      if (file) {
        uploadPdfMutation.mutate({
          fileName: file.name,
          totalPages: 100,
          fileSize: file.size ?? 0,
          fileUri: file.uri,
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return {
    // Estado
    pdfs,
    isLoading: isLoading || isFetchingNextPage || uploadPdfMutation.isPending,
    hasMore: hasNextPage,
    error: error ?? uploadPdfMutation.error ?? null,

    // Acciones
    loadMore: fetchNextPage,
    refresh: refetch,
    uploadPdf: uplodadPdf,

    reset: uploadPdfMutation.reset,
  };
};
