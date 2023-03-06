import { Header } from '@/presentation/components/Header';
import GlobalStyles from '@/presentation/styles/globalStyles';
import Providers from '@/providers';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { useCart } from '@/providers/Cart';

function App({ Component, pageProps }: AppProps) {
  const { totalCartValue } = useCart();
  return (
    <Providers>
      <Head>
        <title>WeMovies</title>
        <meta name="description" content="Site de e-commerce de filmes" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
