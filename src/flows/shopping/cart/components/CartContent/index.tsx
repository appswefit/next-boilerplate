import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';

import { CartItemDesktop } from '../CartItemDesktop';
import { CartItemMobile } from '../CartItemMobile';

interface CartContentProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export function CartContent({ cart, deleteProductInCart }: CartContentProps) {
  return (
    <div className="w-full max-w-940 h-full mx-auto p-16 flex flex-col bg-white rounded-[theme.border.radius]">
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
            <th className="pb-21 text-gray-400 text-small font-bold leading-19 text-left uppercase">Produto</th>
            <th className="pb-21 text-gray-400 text-small font-bold leading-19 text-left uppercase">QTD</th>
            <th className="pb-21 text-gray-400 text-small font-bold leading-19 text-left uppercase">SUBTOTAL</th>
            <th className="pb-21 text-gray-400 text-small font-bold leading-19 text-left uppercase"></th>
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
