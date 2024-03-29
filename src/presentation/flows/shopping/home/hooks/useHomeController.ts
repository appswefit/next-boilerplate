'use client'

import {
  IProductListFilter,
  ProductListRequestData,
} from '@/hooks/product/dtos/GetProductListDTO';
import useProductService from '@/hooks/product/useProductService';
import { HttpError } from '@/infra/http/core/HttpError';
import { IBffResponseBodyError } from '@/infra/http/factory/types';
import { useCallback, useState } from 'react';

import { useCart } from '@/context/Cart';

export default function useHomeController() {
  const { cart, addProductInCart } = useCart();
  const [productListRequestState, setProductListRequestState] =
    useState<ProductListRequestData>({
      isLoading: false,
      data: null,
      error: null,
    });
  const { getProductList } = useProductService();

  const requestProductList = useCallback(
    async (productListFilter: IProductListFilter) => {
      try {
        setProductListRequestState(prevState => ({
          ...prevState,
          isLoading: true,
        }));
        const data = await getProductList(productListFilter);
        setProductListRequestState(prevState => ({
          ...prevState,
          data,
        }));
      } catch (error) {
        const httpError = error as HttpError<IBffResponseBodyError>;
        setProductListRequestState(prevState => ({
          ...prevState,
          error: httpError,
        }));
        throw httpError;
      } finally {
        setProductListRequestState(prevState => ({
          ...prevState,
          isLoading: false,
        }));
      }
    },
    [getProductList, setProductListRequestState],
  );

  const handleProductFilter = useCallback(
    async (produtListFilter: IProductListFilter) => {
      try {
        await requestProductList(produtListFilter);
      } catch (error) {
        // [Optional] add some error handling imperatively
      }
    },
    [requestProductList],
  );

  return {
    handleProductFilter,
    productListRequest: productListRequestState,
    cart,
    addProductInCart,
  };
}
