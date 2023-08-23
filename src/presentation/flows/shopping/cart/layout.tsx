import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import emptyCartSvg from '@/presentation/assets/images/empty-cart.svg';
import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import { PageHead } from '@/presentation/components/PageHead';
import { Cart } from '@/presentation/flows/shopping/cart/components/Cart';
import { ReactElement } from 'react';

import { useCart } from '@/providers/Cart';

import ShoppingLayout from '../layout';
import shoppingRoutes from '../routes';

export interface CartPageLayoutProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export default function CartPageLayout() {
  const { cart, deleteProductInCart } = useCart();
  const hasItemsInCart = cart?.length > 0;
  return (
    <>
      <PageHead
        title="WeMovies | Carrinho"
        description="Carrinho de produtos"
      />
      {hasItemsInCart ? (
        <Cart
          cart={cart}
          totalCartValue={cart.length}
          deleteProductInCart={deleteProductInCart}
        />
      ) : (
        <FeedbackPage
          title="Parece que não há nada por aqui :("
          imageUrl={emptyCartSvg}
          alt=""
          url={shoppingRoutes.home.path}
          imgWidth={447}
          imgHeight={266}
        />
      )}
    </>
  );
}

CartPageLayout.getBaseLayout = function getLayout(page: ReactElement) {
  return <ShoppingLayout>{page}</ShoppingLayout>;
};
