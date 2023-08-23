import { useFetchProducts } from '@/infrastructure/hooks/products/useFetchProducts';
import { IHttpFetchError } from '@/infrastructure/http/HttpFetcher';
import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import { Loading } from '@/presentation/components/Loading';
import { PageHead } from '@/presentation/components/PageHead';
import { Product } from '@/presentation/flows/shopping/home/components/Product';
import { ProductList } from '@/presentation/flows/shopping/home/components/ProductList';
import { COOKIE_APP_SESSION_TOKEN_KEY } from '@/utils/middleware-helper';
import { setCookie } from 'cookies-next';
import { ReactElement, useCallback, useEffect } from 'react';

import { useCart } from '@/providers/Cart';

import ShoppingLayout from '../layout';

export interface ShoppingHomePageLayoutProps {
  products: IProduct[] | undefined;
  cart: IProduct[];
  isLoading: boolean;
  error: IHttpFetchError | undefined;
  addProductInCart: (product: IProduct) => void;
}

export default function ShoppingHomePageLayout() {
  const { products, error, isLoading } = useFetchProducts();
  const { cart, addProductInCart } = useCart();

  useEffect(() => {
    setCookie(COOKIE_APP_SESSION_TOKEN_KEY, 'session-token-foo');
  }, []);

  const renderBody = useCallback(() => {
    if (isLoading) return <Loading />;

    if (error) return <div>{error.message}</div>;

    return (
      <ProductList>
        {products?.map((product: IProduct) => {
          const hasProductInCart = cart.some(
            (productInCart: IProduct) => productInCart.id === product.id,
          );
          return (
            <Product
              key={product.id}
              product={product}
              hasProductInCart={hasProductInCart}
              addProductInCart={addProductInCart}
            />
          );
        })}
      </ProductList>
    );
  }, [products, cart, isLoading, error, addProductInCart]);

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
