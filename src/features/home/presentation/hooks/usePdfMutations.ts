import { useMutation, useQueryClient } from '@tanstack/react-query';

import type {
  CreatePdfDto,
  UpdatePdfProgressDto,
} from '@common/data/models/PdfModel';
import { $ } from '@common/domain/di/Types';
import type { DeletePdfUseCase } from '@common/domain/usecases/DeletePdfUseCase';
import type { UpdatePdfProgressUseCase } from '@common/domain/usecases/UpdatePdfProgressUseCase';
import type { UploadPdfUseCase } from '@common/domain/usecases/UploadPdfUseCase';
import { resolver } from '@main/domain/di/Register';
import { useAuthStore } from '@main/domain/store';

/**
 * Hook para manejar la mutación de subida de PDF.
 * Ejemplo de uso con TanStack Query.
 */
export const useUploadPdfMutation = () => {
  const userId = useAuthStore((state) => state.user?.id);

  if (!userId) {
    throw new Error('User not found');
  }

  const queryClient = useQueryClient();

  const uploadPdfUseCase = resolver.resolve<UploadPdfUseCase>(
    $.UploadPdfUseCase
  );

  return useMutation({
    mutationFn: (dto: CreatePdfDto) => {
      return uploadPdfUseCase.execute(userId, dto);
    },
    onSuccess: (response) => {
      // Invalidar queries para refrescar la lista
      void queryClient.invalidateQueries({ queryKey: ['pdfs', userId] });
    },
    onError: (error) => {
      console.error('Error uploading PDF:', error);
    },
  });
};

/**
 * Hook para manejar la mutación de actualización de progreso.
 */
export const useUpdateProgressMutation = () => {
  const updateProgressUseCase = resolver.resolve<UpdatePdfProgressUseCase>(
    $.UpdatePdfProgressUseCase
  );
  const userId = useAuthStore((state) => state.user?.id);

  if (!userId) {
    throw new Error('User not found');
  }

  return useMutation({
    mutationFn: (dto: UpdatePdfProgressDto) => {
      return updateProgressUseCase.execute(userId, dto);
    },
    onSuccess: (response, variables) => {
      // Actualizar el cache del PDF específico
      // queryClient.setQueryData(['pdf', userId, variables.pdfId], response.pdf);
    },
    onError: (error) => {
      console.error('Error updating progress:', error);
    },
  });
};

/**
 * Hook para manejar la mutación de eliminación de PDF.
 */
export const useDeletePdfMutation = () => {
  const queryClient = useQueryClient();

  const userId = useAuthStore((state) => state.user?.id);

  if (!userId) {
    throw new Error('User not found');
  }

  const deletePdfUseCase = resolver.resolve<DeletePdfUseCase>(
    $.DeletePdfUseCase
  );

  return useMutation({
    mutationFn: (pdfId: string) => {
      return deletePdfUseCase.execute(userId, pdfId);
    },
    onSuccess: () => {
      // Invalidar queries
      void queryClient.invalidateQueries({ queryKey: ['pdfs', userId] });
    },
    onError: (error) => {
      console.error('Error deleting PDF:', error);
    },
  });
};
