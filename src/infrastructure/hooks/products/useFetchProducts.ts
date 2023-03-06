import { IHttpFetchError } from '@/infrastructure/http/HttpFetcher';
import { useCallback, useMemo } from 'react';
import useSWR from 'swr';

import ProductsService from '../../services/ProductService';
import {
  FetchProductsResponseDTO,
  IProduct,
} from '../../services/ProductService/dtos/FetchProductsDTO';

export const useFetchProducts = () => {
  const service = useMemo(() => new ProductsService(), []);
  const fetchProducts = useCallback(() => service.fetchProducts(), [service]);

  const { data, error, isLoading } = useSWR<
    FetchProductsResponseDTO,
    IHttpFetchError
  >(service.routes.products, fetchProducts);
  const products = data?.content;

  return { products, isLoading, error };
};
