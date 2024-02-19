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
    <div className="w-full max-w-[940px] h-full mx-auto p-4 flex flex-col bg-white rounded-2xl">
      <CartContent cart={cart} deleteProductInCart={deleteProductInCart} />
      <div className="pt-5 flex flex-col border-t border-gray md:flex-row md:justify-between">
        <div className="flex items-center mb-4 md:mb-0 md:order-2">
          <p className="text-sm font-bold leading-5 uppercase text-gray">Total</p>
          <strong className="w-[130px] text-2xl font-bold leading-8 text-primary text-center">{formatCurrency(totalCartValue)}</strong>
        </div>
        <InternalLink
          href={shoppingRoutes.success.path}
          textLink="Finalizar pedido"
        />
      </div>
    </div>
  );
}
