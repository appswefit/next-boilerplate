import shoppingRoutes from '@/flows/shopping/routes';
import { ReactElement } from 'react';

import { NextPageWithLayout } from '../../_app';

const CartPage: NextPageWithLayout = () => {
  return shoppingRoutes.cart.element({});
};

CartPage.getLayout = function getLayout(page: ReactElement) {
  return shoppingRoutes.cart.getBaseLayout(page);
};

export default CartPage;
