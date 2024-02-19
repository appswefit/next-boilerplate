'use client'

import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import { Cart } from '@/presentation/flows/shopping/cart/components/Cart';
import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';
import emptyCartSvg from '@/presentation/assets/images/empty-cart.svg';

import { useCart } from '@/context/Cart';

import shoppingRoutes from '@/presentation/flows/shopping/routes';

export interface CartPageLayoutProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export default function CartPageLayout() {
  const { cart, deleteProductInCart } = useCart();
  const hasItemsInCart = cart?.length > 0;
  return (
    <>
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
