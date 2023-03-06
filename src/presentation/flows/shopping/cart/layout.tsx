import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import emptyCartSvg from '@/presentation/assets/images/empty-cart.svg';
import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import { Header } from '@/presentation/components/Header';
import { PageHead } from '@/presentation/components/PageHead';
import { PageWrapper } from '@/presentation/components/PageWrapper';
import { Cart } from '@/presentation/flows/shopping/cart/components/Cart';

import shoppingRoutes from '../routes';

export interface CartPageLayoutProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export default function CartPageLayout({
  cart,
  deleteProductInCart,
}: CartPageLayoutProps) {
  const hasItemsInCart = cart?.length > 0;
  return (
    <>
      <PageHead
        title="WeMovies | Carrinho"
        description="Carrinho de produtos"
      />
      <Header totalCartValue={cart.length} />
      <PageWrapper>
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
      </PageWrapper>
    </>
  );
}
