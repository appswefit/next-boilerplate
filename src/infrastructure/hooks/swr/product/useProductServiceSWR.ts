import { HttpError } from '@/infrastructure/http/core/HttpError';
import { IHttpResponse } from '@/infrastructure/http/core/IHttpFetcher';
import makeAuthenticatedBffFetcher from '@/infrastructure/http/factory/authenticated-bff-fetcher';
import { IBffResponseBodyError } from '@/infrastructure/http/factory/types';
import { useCallback, useMemo } from 'react';
import useSWRMutation from 'swr/mutation';

import {
  IGetProductListResponseDTO,
  IProductListFilter,
} from '../../product/dtos/GetProductListDTO';

const Routes = {
  PRODUCTS: '/products',
};

// TODO: this example of SWR Setup is currently in development (not finished).
export default function useGetProductListSWR(
  produtListFilter: IProductListFilter | null,
) {
  const produtListFilterAsString = useMemo(
    () => JSON.stringify(produtListFilter),
    [produtListFilter],
  );
  const getProductList = useCallback(
    async (
      key: any,
      params: any,
    ): Promise<IHttpResponse<IGetProductListResponseDTO>> => {
      return await makeAuthenticatedBffFetcher().get(
        Routes.PRODUCTS,
        produtListFilter,
      );
    },
    [produtListFilter],
  );

  const { trigger, data, isMutating, error } = useSWRMutation<
    IHttpResponse<IGetProductListResponseDTO>,
    HttpError<IBffResponseBodyError>
  >([Routes.PRODUCTS, produtListFilterAsString], getProductList);

  return {
    getProductList: trigger,
    productListRequest: {
      isLoading: isMutating,
      error,
      data,
    },
  };
}
