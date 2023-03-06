import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import deleteIconSvg from '@/presentation/assets/images/delete-icon.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';

import { useCart } from '@/providers/Cart';

import { Counter } from '../Counter';
import {
  Price,
  StyledImage,
  Title,
  TitleAndPriceWrapper,
  Wrapper,
} from './styles';

interface CartItemDesktopProps {
  product: IProduct;
  deleteProductInCart: (id: number) => void;
}

export function CartItemDesktop({
  product,
  deleteProductInCart,
}: CartItemDesktopProps) {
  const { id, title, price, image } = product;
  return (
    <Wrapper>
      <td>
        <StyledImage src={image} alt={title} width={89} height={114} />
        <TitleAndPriceWrapper>
          <Title>{title}</Title>
          <Price>{formatCurrency(price)}</Price>
        </TitleAndPriceWrapper>
      </td>
      <td>
        <Counter productId={id} />
      </td>
      <td>
        <Price>{formatCurrency(price)}</Price>
      </td>
      <td>
        <Image
          src={deleteIconSvg}
          alt=""
          onClick={() => deleteProductInCart(id)}
          width={18}
          height={18}
        />
      </td>
    </Wrapper>
  );
}
