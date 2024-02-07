import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';
import { formatCurrency } from '@/utils/format-currency';

import { InternalLink } from '../../../../../components/InternalLink';
import shoppingRoutes from '../../../routes';
import { CartContent } from '../CartContent';

interface CartProps {
  totalCartValue: number;
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export function Cart({ cart, totalCartValue, deleteProductInCart }: CartProps) {
  return (
    <div className="w-full max-w-940 mx-auto p-16 flex flex-col bg-white rounded-[theme.border.radius]">
      <CartContent cart={cart} deleteProductInCart={deleteProductInCart} />
      <div className="pt-21 flex flex-col border-t border-gray-400 md:flex-row-reverse md:justify-between">
        <div className="mb-16 md:mb-0 md:order-2">
          <p className="text-small font-xbold leading-19 uppercase text-gray-400">Total</p>
          <strong className="w-130 text-xxlarge font-xbold leading-33 text-primary text-center">{formatCurrency(totalCartValue)}</strong>
        </div>
        <InternalLink
          href={shoppingRoutes.success.path}
          textLink="Finalizar pedido"
        />
      </div>
    </div>
  );
}
