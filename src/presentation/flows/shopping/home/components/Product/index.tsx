import { IProduct } from '@/infrastructure/hooks/product/dtos/GetProductListDTO';
import cartSvg from '@/presentation/assets/images/cart.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';

import { Button, Price, Title, Wrapper } from './styles';

interface ProductProps {
  product: IProduct;
  hasProductInCart: boolean;
  addProductInCart: (product: IProduct) => void;
}

export function Product({
  product,
  hasProductInCart,
  addProductInCart,
}: ProductProps) {
  return (
    <Wrapper>
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={147}
        height={188}
      />
      <Title>{product.title}</Title>
      <Price>{formatCurrency(product.price)}</Price>
      <Button
        hasProductInCart={hasProductInCart}
        onClick={() => addProductInCart(product)}
      >
        <span>
          <Image
            src={cartSvg}
            alt="Adiciona o produto ao carrinho"
            width={12}
            height={12}
          />
          <p>{hasProductInCart ? 1 : 0}</p>
        </span>
        {hasProductInCart ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
      </Button>
    </Wrapper>
  );
}
