// import '@/presentation/styles/globalStyles.css';
import { Metadata, NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { ThemeProvider } from '@/context/theme-provider';
import { ReactQueryProvider } from '@/context/react-query-provider';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const metadata: Metadata = {
  title: 'WeMovies',
  description: 'Site de e-commerce de filmes',
};

function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen">
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
