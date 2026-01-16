import { useCallback } from 'react';

import {
  useDeletePdfMutation,
  useUpdateProgressMutation,
} from '../hooks/usePdfMutations';
import { usePdfQuery } from '../hooks/usePdfQueries';

/**
 * ViewModel para visualizar y gestionar un PDF específico.
 * Usa TanStack Query para manejar el estado.
 */
export const usePdfViewerViewModel = (pdfId: string) => {
  // Query para obtener el PDF
  const { data: pdf, isLoading, error, refetch } = usePdfQuery(pdfId);

  // Mutations
  const updateProgressMutation = useUpdateProgressMutation();
  const deleteMutation = useDeletePdfMutation();

  const updateProgress = useCallback(
    (currentPage: number, totalPages: number) => {
      const progress = Math.round((currentPage / totalPages) * 100);

      updateProgressMutation.mutate({
        pdfId,
        currentPage,
        progress,
      });
    },
    [pdfId, updateProgressMutation]
  );

  /**
   * Elimina el PDF.
   */
  const deletePdf = useCallback(() => {
    return deleteMutation.mutateAsync(pdfId);
  }, [pdfId, deleteMutation]);

  return {
    // Estado
    pdf: pdf ?? null,
    isLoading,
    isUpdating: updateProgressMutation.isPending,
    isDeleting: deleteMutation.isPending,
    error: error ?? deleteMutation.error ?? null,

    // Acciones
    loadPdf: refetch,
    updateProgress,
    deletePdf,
  };
};
