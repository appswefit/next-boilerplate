import { RouteObject } from '@/@types/route';

interface ShoppingRoutes {
  home: RouteObject;
  cart: RouteObject;
  success: RouteObject;
}

const shoppingRoutes: ShoppingRoutes = {
  home: {
    path: '/shopping',
  },
  cart: {
    path: '/shopping/cart',
  },
  success: {
    path: '/shopping/success',
  },
};
export default shoppingRoutes;
