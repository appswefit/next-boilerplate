'use client'

import { Loading } from '@/components/Loading';
import { PageHead } from '@/components/PageHead';
import { Product } from '@/flows/shopping/home/components/Product';
import { ProductList } from '@/flows/shopping/home/components/ProductList';
import {
  IProduct,
  IProductListFilter,
} from '@/hooks/product/dtos/GetProductListDTO';
import { ReactElement, useCallback, useEffect } from 'react';

import ShoppingLayout from '../layout';
import useHomeController from './hooks/useHomeController';

export interface ShoppingHomePageLayoutProps {
  products: IProduct[] | undefined;
  cart: IProduct[];
  isLoading: boolean;
  error: any;
  addProductInCart: (product: IProduct) => void;
}

const INITIAL_PAGE_LIMIT = 10;

export default function ShoppingHomePageLayout() {
  const { handleProductFilter, productListRequest, cart, addProductInCart } =
    useHomeController();

  useEffect(() => {
    const initialFilter: IProductListFilter = {
      searchTerm: null,
      limit: INITIAL_PAGE_LIMIT,
      offset: 0,
    };
    handleProductFilter(initialFilter);
  }, [handleProductFilter]);

  const renderBody = useCallback(() => {
    const isLoading = productListRequest?.isLoading;
    const productList = productListRequest?.data?.body?.content;
    const productListErrorMessage = productListRequest?.error?.body?.message;

    if (isLoading) return <Loading />;

    if (productListErrorMessage) return <div>{productListErrorMessage}</div>;

    return (
      <ProductList>
        {productList?.map((product: IProduct) => {
          const hasProductInCart = cart.some(
            (productInCart: IProduct) => productInCart.id === product.id,
          );
          return (
            <Product
              key={product.id}
              product={product}
              hasProductInCart={hasProductInCart}
              addProductInCart={addProductInCart}
              // addProductInCart={() =>
              //   handleProductFilter({
              //     searchTerm: '',
              //     limit: INITIAL_PAGE_LIMIT,
              //     offset: 0,
              //   })
              // }
            />
          );
        })}
      </ProductList>
    );
  }, [productListRequest, cart, addProductInCart]);

  return (
    <>
      <PageHead title="WeMovies | Home" description="Página inicial" />
      {renderBody()}
    </>
  );
}

ShoppingHomePageLayout.getBaseLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};
