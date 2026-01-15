import { useUploadPdfMutation } from '../hooks/usePdfMutations';

/**
 * ViewModel para subir PDFs.
 * Usa TanStack Query mutation para manejar el estado de subida.
 */
export const useUploadPdfViewModel = (userId: string) => {
  // Usar el hook de TanStack Query mutation
  const mutation = useUploadPdfMutation(userId);

  return {
    // Estado
    isUploading: mutation.isPending,
    uploadedPdf: mutation.data?.pdf || null,
    error: mutation.error || null,

    // Acciones
    uploadPdf: mutation.mutate,
    uploadPdfAsync: mutation.mutateAsync,
    reset: mutation.reset,
  };
};
