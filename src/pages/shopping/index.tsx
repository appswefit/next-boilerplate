import { useFetchProducts } from '@/infrastructure/hooks/products/useFetchProducts';
import ShoppingLayout from '@/presentation/flows/shopping/layout';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { COOKIE_APP_SESSION_TOKEN_KEY } from '@/utils/middleware-helper';
import { setCookie } from 'cookies-next';
import { ReactElement, useEffect } from 'react';

import { useCart } from '@/providers/Cart';

import type { NextPageWithLayout } from '../_app';

const ShoppingHomePage: NextPageWithLayout = () => {
  return shoppingRoutes.home.element({});
};

ShoppingHomePage.getLayout = function getLayout(page: ReactElement) {
  return shoppingRoutes.home.getBaseLayout(page);
};

export default ShoppingHomePage;
