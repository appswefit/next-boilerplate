import ShoppingLayout from '@/presentation/flows/shopping/layout';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { ReactElement, useEffect } from 'react';

import { useCart } from '@/providers/Cart';

import type { NextPageWithLayout } from '../_app';

const SuccessPage: NextPageWithLayout = () => {
  const { cleanCart, cart } = useCart();

  useEffect(() => {
    cleanCart();
  }, [cleanCart]);

  return shoppingRoutes.success.element({ cart });
};

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};

export default SuccessPage;
