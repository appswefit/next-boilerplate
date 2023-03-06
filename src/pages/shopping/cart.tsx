import shoppingRoutes from '@/presentation/flows/shopping/routes';

import { useCart } from '@/providers/Cart';

export default function CartPage() {
  const { cart, totalCartValue, deleteProductInCart } = useCart();

  return shoppingRoutes.cart.element({
    cart,
    totalCartValue,
    deleteProductInCart,
  });
}
