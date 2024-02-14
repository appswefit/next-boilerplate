import shoppingRoutes from '@/flows/shopping/routes';
import { ReactElement } from 'react';

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { getProductListFetcher } from '@/hooks/react-query/product/useProductServiceReactQuery';
import { NextPageWithLayout } from '../layout';
import { initialFilter } from '@/flows/shopping/home/constants';
import Routes from '@/infra/http/routes';

const ShoppingHomePage: NextPageWithLayout = async () => {
  const queryClient = new QueryClient();

  const productListFilterAsString = JSON.stringify(initialFilter);

  await queryClient.prefetchQuery({
    queryKey: [Routes.PRODUCTS, productListFilterAsString],
    queryFn: () => getProductListFetcher(initialFilter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {shoppingRoutes.home.element({})}
    </HydrationBoundary>
  );
};

ShoppingHomePage.getLayout = function getLayout(page: ReactElement) {
  return shoppingRoutes.home.getBaseLayout(page);
};

export default ShoppingHomePage;
