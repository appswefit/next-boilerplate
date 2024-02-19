
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'WeMovies | Carrinho',
  description: "Carrinho de produtos",
}

const CartPage = ({
  children
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};

export default CartPage;
