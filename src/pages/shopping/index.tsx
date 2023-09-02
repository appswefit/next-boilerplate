import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { ReactElement } from 'react';

import type { NextPageWithLayout } from '../_app';

const ShoppingHomePage: NextPageWithLayout = () => {
  return shoppingRoutes.home.element({});
};

ShoppingHomePage.getLayout = function getLayout(page: ReactElement) {
  return shoppingRoutes.home.getBaseLayout(page);
};

export default ShoppingHomePage;
