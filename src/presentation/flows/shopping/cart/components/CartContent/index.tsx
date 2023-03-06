import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';

import { CartItemDesktop } from '../CartItemDesktop';
import { CartItemMobile } from '../CartItemMobile';
import { CartMobile, Table, Th, Wrapper } from './styles';

interface CartContentProps {
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export function CartContent({ cart, deleteProductInCart }: CartContentProps) {
  return (
    <Wrapper>
      <CartMobile>
        {cart.map(product => (
          <CartItemMobile
            key={product.id}
            product={product}
            deleteProductInCart={deleteProductInCart}
          />
        ))}
      </CartMobile>
      <Table>
        <thead>
          <tr>
            <Th>Produto</Th>
            <Th>QTD</Th>
            <Th>SUBTOTAL</Th>
            <Th></Th>
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
      </Table>
    </Wrapper>
  );
}
