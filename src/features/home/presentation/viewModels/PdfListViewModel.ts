import { useMemo } from 'react';

import { usePdfListQuery } from '../hooks/usePdfQueries';

/**
 * ViewModel para la lista de PDFs.
 * Usa TanStack Query para manejar el estado y cache.
 */
export const usePdfListViewModel = (userId: string, pageSize = 10) => {
  // Usar el hook de TanStack Query
  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
    error,
  } = usePdfListQuery(userId, pageSize);

  // Aplanar los PDFs de todas las páginas
  const pdfs = useMemo(() => {
    return data?.pages.flatMap((page) => page.pdfs) ?? [];
  }, [data]);

  return {
    // Estado
    pdfs,
    isLoading: isLoading || isFetchingNextPage,
    hasMore: hasNextPage,
    error: error ?? null,

    // Acciones
    loadMore: fetchNextPage,
    refresh: refetch,
  };
};
