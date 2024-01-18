import { RouteObjectWithBaseLayout } from '@/presentation/types/route';
import { ReactElement } from 'react';

import CartPageLayout from './cart/layout';
import ShoppingHomePageLayout from './home/layout';
import SuccessPageLayout from './success/layout';

interface ShoppingRoutes {
  home: RouteObjectWithBaseLayout;
  cart: RouteObjectWithBaseLayout;
  success: RouteObjectWithBaseLayout;
}

const shoppingRoutes: ShoppingRoutes = {
  home: {
    path: '/shopping',
    element: () => <ShoppingHomePageLayout />,
    getBaseLayout: (page: ReactElement) =>
      ShoppingHomePageLayout.getBaseLayout(page),
  },
  cart: {
    path: '/shopping/cart',
    element: () => <CartPageLayout />,
    getBaseLayout: (page: ReactElement) => CartPageLayout.getBaseLayout(page),
  },
  success: {
    path: '/shopping/success',
    element: () => <SuccessPageLayout />,
    getBaseLayout: (page: ReactElement) =>
      SuccessPageLayout.getBaseLayout(page),
  },
};
export default shoppingRoutes;
