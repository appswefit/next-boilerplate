import {
  IGetProductListResponseDTO,
  IProductListFilter,
} from '../../product/dtos/GetProductListDTO';
import { IHttpResponse } from '@/infra/http/core/IHttpFetcher';
import makeAuthenticatedBffFetcher from '@/infra/http/factory/authenticated-bff-fetcher';
import { useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IBffResponseBodyError } from '@/infra/http/factory/types';
import { HttpError } from '@/infra/http/core/HttpError';
import Routes from '@/infra/http/routes';

export const getProductListFetcher = async (
  productListFilter: IProductListFilter | null,
): Promise<IHttpResponse<IGetProductListResponseDTO>> => {
  return await makeAuthenticatedBffFetcher().get(
    Routes.PRODUCTS,
    productListFilter,
  );
};

export default function useGetProductListReactQuery(
  productListFilter: IProductListFilter | null,
) {
  const productListFilterAsString = useMemo(
    () => JSON.stringify(productListFilter),
    [productListFilter],
  );

  const getProductList = useCallback(
    () => getProductListFetcher(productListFilter),
    [productListFilter],
  );

  const { data, isLoading, error, refetch } = useQuery<
    IHttpResponse<IGetProductListResponseDTO>,
    HttpError<IBffResponseBodyError>
  >({
    queryKey: [Routes.PRODUCTS, productListFilterAsString],
    queryFn: getProductList,
    enabled: Boolean(productListFilter),
  });

  return {
    getProductList: refetch,
    productListRequest: {
      isLoading,
      error,
      data,
    },
  };
}
