import { useMemo, useRef, useState } from 'react';
import type { PdfRef } from 'react-native-pdf';

const usePDFViewer = () => {
  interface State {
    currentPage: number;
    totalPages: number;
    readedPages: number;
    pageInput: number | undefined;
    pendingProgressUpdate: boolean;
  }

  const initialState = {
    currentPage: 1,
    totalPages: 0,
    readedPages: 0,
    pageInput: undefined,
    pendingProgressUpdate: false,
  };

  const [state, setState] = useState<State>({
    ...initialState,
    pageInput: initialState.currentPage,
  });

  const currentProgress = useMemo(() => {
    return state.readedPages / state.totalPages;
  }, [state.readedPages, state.totalPages]);

  const pdfRef = useRef<PdfRef>(null);

  const handlePageInputChange = (text?: string) => {
    const page = text ? parseInt(text) : undefined;

    if (page && (page < 1 || page > state.totalPages)) return;

    setState((prev) => ({
      ...prev,
      pageInput: page,
    }));

    if (page) {
      pdfRef.current?.setPage(page);
      // Mostrar botón de actualización siempre que navegue manualmente
      setState((prev) => ({
        ...prev,
        pendingProgressUpdate: true,
      }));
    }
  };

  const handleOnLoadComplete = (numberOfPages: number) => {
    console.log('handleOnLoadComplete', numberOfPages);
    setState((prev) => ({
      ...prev,
      totalPages: numberOfPages,
    }));
  };

  const handleOnPageChanged = (page: number) => {
    setState((prev) => ({
      ...prev,
      currentPage: page,
      pageInput: page,
      readedPages: !prev.pendingProgressUpdate
        ? Math.max(prev.readedPages, page)
        : prev.readedPages,
    }));
  };

  const handleUpdateProgress = () => {
    setState((prev) => ({
      ...prev,
      readedPages: prev.currentPage,
      pendingProgressUpdate: false,
    }));
  };

  const handleReinitializeProgress = () => {
    setState((prev) => ({
      ...prev,
      readedPages: 0,
      pendingProgressUpdate: false,
    }));
    pdfRef.current?.setPage(1);
  };

  const handleOnError = (error: unknown) => {
    console.log(error);
  };

  return {
    ...state,
    currentProgress,
    pdfRef,
    handlePageInputChange,
    handleUpdateProgress,
    handleReinitializeProgress,
    handleOnLoadComplete,
    handleOnPageChanged,
    handleOnError,
  };
};

export default usePDFViewer;
