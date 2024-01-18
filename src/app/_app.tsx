import GlobalStyles from '@/presentation/styles/globalStyles';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

import GlobalProviders from '@/providers/GlobalProviders';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <GlobalProviders>
      <Head>
        <title>WeMovies</title>
        <meta name="description" content="Site de e-commerce de filmes" />
      </Head>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </GlobalProviders>
  );
}

export default App;
