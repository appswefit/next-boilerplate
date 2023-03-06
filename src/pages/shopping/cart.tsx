import ShoppingLayout from '@/presentation/flows/shopping/layout';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { ReactElement, ReactNode } from 'react';

import { useCart } from '@/providers/Cart';

import { NextPageWithLayout } from '../_app';

const CartPage: NextPageWithLayout = () => {
  const { cart, deleteProductInCart } = useCart();

  return shoppingRoutes.cart.element({
    cart,
    deleteProductInCart,
  });
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};

export default CartPage;
