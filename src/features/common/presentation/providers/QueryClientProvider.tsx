import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { useState } from 'react';

/**
 * Props for the QueryClientProvider component.
 *
 * @property {ReactNode} children - The child elements.
 * @notExported
 */
interface QueryClientProviderProps {
  children: ReactNode;
}

/**
 * Creates a QueryClient instance with default configuration.
 *
 * @returns {QueryClient} A configured QueryClient instance.
 */
const createQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000, // 5 minutos
      },
      mutations: {
        retry: 1,
      },
    },
  });
};

/**
 * The QueryClientProvider component wraps a child component tree with a React Query
 * QueryClientProvider that provides query client functionality to all descendant components.
 *
 * @param {QueryClientProviderProps} props - The component props.
 * @returns {JSX.Element} The wrapped child component tree.
 */
export const QueryClientProvider: React.FC<QueryClientProviderProps> = ({
  children,
}) => {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};
