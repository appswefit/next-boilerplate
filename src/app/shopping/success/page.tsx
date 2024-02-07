import ShoppingLayout from '@/flows/shopping/layout';
import shoppingRoutes from '@/flows/shopping/routes';
import { ReactElement } from 'react';

import type { NextPageWithLayout } from '../../_app';

const SuccessPage: NextPageWithLayout = () => {
  return shoppingRoutes.success.element({});
};

SuccessPage.getLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};

export default SuccessPage;
