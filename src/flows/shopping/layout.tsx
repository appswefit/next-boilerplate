import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';

import { CartProvider } from '@/context/Cart';

export default function ShoppingLayout({ children }: any) {
  return (
    <CartProvider>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </CartProvider>
  );
}
