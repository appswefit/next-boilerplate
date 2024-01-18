import ShoppingLayout from '@/presentation/flows/shopping/layout';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { ReactElement, ReactNode } from 'react';

import { useCart } from '@/providers/Cart';

import { NextPageWithLayout } from '../_app';

const CartPage: NextPageWithLayout = () => {
  return shoppingRoutes.cart.element({});
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return shoppingRoutes.cart.getBaseLayout(page);
};

export default CartPage;
