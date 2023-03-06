import { useFetchProducts } from '@/infrastructure/hooks/products/useFetchProducts';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { COOKIE_APP_SESSION_TOKEN_KEY } from '@/utils/middleware-helper';
import { setCookie } from 'cookies-next';
import { useEffect } from 'react';

import { useCart } from '@/providers/Cart';

export default function ShoppingHomePage() {
  const { products, error, isLoading } = useFetchProducts();
  const { cart, addProductInCart } = useCart();

  useEffect(() => {
    setCookie(COOKIE_APP_SESSION_TOKEN_KEY, 'session-token-foo');
  }, []);

  return shoppingRoutes.home.element({
    products,
    cart,
    error,
    isLoading,
    addProductInCart,
  });
}
