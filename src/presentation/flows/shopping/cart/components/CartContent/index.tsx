import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';

import { CartItemDesktop } from '../CartItemDesktop';
import { CartItemMobile } from '../CartItemMobile';

interface CartContentProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export function CartContent({ cart, deleteProductInCart }: CartContentProps) {
  return (
    <div className="w-full max-w-[940px] h-full mx-auto p-4 flex flex-col bg-white rounded-xl md:h-auto">
      <div className="block md:hidden">
        {cart.map(product => (
          <CartItemMobile
            key={product.id}
            product={product}
            deleteProductInCart={deleteProductInCart}
          />
        ))}
      </div>
      <table className="hidden md:inline-table">
        <thead>
          <tr>
            <th className="pb-5 text-gray text-sm font-bold leading-5 text-left uppercase">Produto</th>
            <th className="pb-5 text-gray text-sm font-bold leading-5 text-left uppercase">QTD</th>
            <th className="pb-5 text-gray text-sm font-bold leading-5 text-left uppercase">SUBTOTAL</th>
            <th className="pb-5 text-gray text-sm font-bold leading-5 text-left uppercase"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <CartItemDesktop
              key={product.id}
              product={product}
              deleteProductInCart={deleteProductInCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
