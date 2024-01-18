import { Header } from '@/presentation/components/Header';
import { PageWrapper } from '@/presentation/components/PageWrapper';

import { CartProvider } from '@/providers/Cart';

export default function ShoppingLayout({ children }: any) {
  return (
    <CartProvider>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </CartProvider>
  );
}
