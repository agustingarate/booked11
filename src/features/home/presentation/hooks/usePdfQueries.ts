import type {
  InfiniteData,
  UseInfiniteQueryResult,
  UseQueryResult,
} from '@tanstack/react-query';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import type { DocumentSnapshot } from 'firebase/firestore';

import type { PdfListResponse, PdfModel } from '@common/data/models/PdfModel';
import { $ } from '@common/domain/di/Types';
import type { GetPdfUseCase } from '@common/domain/usecases/GetPdfUseCase';
import type { ListPdfsUseCase } from '@common/domain/usecases/ListPdfsUseCase';
import { resolver } from '@main/domain/di/Register';

/**
 * Hook para obtener la lista de PDFs con paginación infinita.
 * Ejemplo de uso con TanStack Query Infinite Queries.
 */
export const usePdfListQuery = (
  userId: string,
  pageSize = 10
): UseInfiniteQueryResult<InfiniteData<PdfListResponse>, Error> => {
  const listPdfsUseCase = resolver.resolve<ListPdfsUseCase>($.ListPdfsUseCase);

  return useInfiniteQuery<
    PdfListResponse,
    Error,
    InfiniteData<PdfListResponse>,
    ['pdfs', string],
    DocumentSnapshot | undefined
  >({
    queryKey: ['pdfs', userId],
    queryFn: async ({ pageParam }) => {
      const response = await listPdfsUseCase.execute(userId, {
        limit: pageSize,
        lastDoc: pageParam,
      });

      return response;
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage): DocumentSnapshot | undefined => {
      return lastPage.hasMore ? lastPage.lastDoc : undefined;
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    enabled: !!userId,
  });
};

/**
 * Hook para obtener un PDF específico.
 */
export const usePdfQuery = (
  userId: string,
  pdfId: string,
  enabled = true
): UseQueryResult<PdfModel, Error> => {
  const getPdfUseCase = resolver.resolve<GetPdfUseCase>($.GetPdfUseCase);

  return useQuery({
    queryKey: ['pdf', userId, pdfId],
    queryFn: async () => {
      const pdf = await getPdfUseCase.execute(userId, pdfId);
      return pdf;
    },
    enabled: enabled && !!pdfId && !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
