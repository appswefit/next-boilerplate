import { Header } from '@/components/Header';
import { PageWrapper } from '@/components/PageWrapper';

import { CartProvider } from '@/context/Cart';
import { ReactNode } from 'react';

export default function ShoppingLayoutTemplate({
  children
}: {
  children: ReactNode;
}) {
  return (
    <CartProvider>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </CartProvider>
  );
}
