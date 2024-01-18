import { IProduct } from '@/infrastructure/hooks/product/dtos/GetProductListDTO';
import { formatCurrency } from '@/utils/format-currency';

import { InternalLink } from '../../../../../components/InternalLink';
import shoppingRoutes from '../../../routes';
import { CartContent } from '../CartContent';
import { Total, TotalWrapper, Wrapper } from './styles';

interface CartProps {
  totalCartValue: number;
  cart: IProduct[];
  deleteProductInCart: (id: number) => void;
}

export function Cart({ cart, totalCartValue, deleteProductInCart }: CartProps) {
  return (
    <Wrapper>
      <CartContent cart={cart} deleteProductInCart={deleteProductInCart} />
      <TotalWrapper>
        <Total>
          <p>Total</p>
          <strong>{formatCurrency(totalCartValue)}</strong>
        </Total>
        <InternalLink
          href={shoppingRoutes.success.path}
          textLink="Finalizar pedido"
        />
      </TotalWrapper>
    </Wrapper>
  );
}
