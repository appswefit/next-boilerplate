import { Header } from '@/presentation/components/Header';
import { PageWrapper } from '@/presentation/components/PageWrapper';
import { CartProvider } from '@/context/Cart';
import { ThemeProvider } from '@/context/theme-provider';
import { Metadata, Viewport } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'WeMovies',
  description: "Site de e-commerce de filmes",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}


function App({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className="min-h-screen bg-primary">
        <ThemeProvider>
          <CartProvider>
            <Header />
            <PageWrapper>{children}</PageWrapper>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default App;
