import shoppingRoutes from '@/presentation/flows/shopping/routes';
import { useEffect } from 'react';

import { useCart } from '@/providers/Cart';

export default function SuccessPage() {
  const { cleanCart, cart } = useCart();

  useEffect(() => {
    cleanCart();
  }, [cleanCart]);

  return shoppingRoutes.success.element({ cart });
}
