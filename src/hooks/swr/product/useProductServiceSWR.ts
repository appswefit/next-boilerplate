import { HttpError } from '@/infra/http/core/HttpError';
import { IHttpResponse } from '@/infra/http/core/IHttpFetcher';
import makeAuthenticatedBffFetcher from '@/infra/http/factory/authenticated-bff-fetcher';
import { IBffResponseBodyError } from '@/infra/http/factory/types';
import { useCallback, useMemo } from 'react';
import useSWRMutation from 'swr/mutation';

import {
  IGetProductListResponseDTO,
  IProductListFilter,
} from '../../product/dtos/GetProductListDTO';
import Routes from '@/infra/http/routes';

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
