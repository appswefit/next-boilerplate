import { IHttpFetchError } from '@/infrastructure/http/HttpFetcher';
import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import { Loading } from '@/presentation/components/Loading';
import { PageHead } from '@/presentation/components/PageHead';
import { Product } from '@/presentation/flows/shopping/home/components/Product';
import { ProductList } from '@/presentation/flows/shopping/home/components/ProductList';
import { useCallback } from 'react';

export interface ShoppingHomePageLayoutProps {
  products: IProduct[] | undefined;
  cart: IProduct[];
  isLoading: boolean;
  error: IHttpFetchError | undefined;
  addProductInCart: (product: IProduct) => void;
}

export default function ShoppingHomePageLayout({
  products,
  cart,
  isLoading,
  error,
  addProductInCart,
}: ShoppingHomePageLayoutProps) {
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
