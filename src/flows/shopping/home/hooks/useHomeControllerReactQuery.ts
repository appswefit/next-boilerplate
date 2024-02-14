import { useCallback, useRef } from 'react';
import useGetProductListReactQuery from '@/hooks/react-query/product/useProductServiceReactQuery';
import { IProductListFilter } from '@/hooks/product/dtos/GetProductListDTO';
import { useCart } from '@/context/Cart';

export default function useHomeControllerReactQuery(
  initialFilter: IProductListFilter,
) {
  const { cart, addProductInCart } = useCart();
  const productListFilterRef = useRef<IProductListFilter | null>(null);
  const { getProductList, productListRequest } = useGetProductListReactQuery(
    productListFilterRef.current ?? initialFilter,
  );

  const handleProductFilter = useCallback(
    async (productListFilter: IProductListFilter) => {
      try {
        productListFilterRef.current = productListFilter;
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
