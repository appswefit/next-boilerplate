import ShoppingLayout from '@/presentation/flows/shopping/layout';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { ReactElement, useEffect } from 'react';

import { useCart } from '@/providers/Cart';

import type { NextPageWithLayout } from '../_app';

const SuccessPage: NextPageWithLayout = () => {
  return shoppingRoutes.success.element({});
};

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};

export default SuccessPage;
