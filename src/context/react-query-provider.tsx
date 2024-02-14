'use client';

import { useState, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ReactQueryProviderProps {
  children: ReactNode;
}

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  const ONE_MINUTE = 60 * 1000;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: ONE_MINUTE,
            refetchInterval: ONE_MINUTE,
            retry: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
