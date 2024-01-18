import { IProductListFilter } from '@/infrastructure/hooks/product/dtos/GetProductListDTO';
import useGetProductListSWR from '@/infrastructure/hooks/swr/product/useProductServiceSWR';
import { useCallback, useRef } from 'react';

import { useCart } from '@/providers/Cart';

// TODO: this example of SWR Setup is currently in development (not finished).
export default function useHomeControllerSWR() {
  const { cart, addProductInCart } = useCart();
  const productListFilterState = useRef<IProductListFilter | null>(null);
  const { getProductList, productListRequest } = useGetProductListSWR(
    productListFilterState.current,
  );

  const handleProductFilter = useCallback(
    async (produtListFilter: IProductListFilter) => {
      try {
        productListFilterState.current = produtListFilter;
        await getProductList();
      } catch (error) {
        // [Optional] add some error handling imperatively
      }
    },
    [getProductList],
  );

  return {
    handleProductFilter,
    productListRequest,
    cart,
    addProductInCart,
  };
}
