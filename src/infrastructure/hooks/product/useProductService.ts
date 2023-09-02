import { IHttpResponse } from '@/infrastructure/http/core/IHttpFetcher';
import makeAuthenticatedBffFetcher from '@/infrastructure/http/factory/authenticated-bff-fetcher';
import { useCallback } from 'react';

import {
  IGetProductListResponseDTO,
  IProductListFilter,
} from './dtos/GetProductListDTO';

const Routes = {
  PRODUCTS: '/products',
};

export default function useProductService() {
  const getProductList = useCallback(
    async (
      produtListFilter: IProductListFilter,
    ): Promise<IHttpResponse<IGetProductListResponseDTO>> => {
      return await makeAuthenticatedBffFetcher().get<
        IGetProductListResponseDTO,
        IProductListFilter
      >(Routes.PRODUCTS, produtListFilter);
    },
    [],
  );

  return { getProductList };
}
