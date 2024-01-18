import { IProduct } from '@/infrastructure/hooks/product/dtos/GetProductListDTO';
import deleteIconSvg from '@/presentation/assets/images/delete-icon.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';

import { Counter } from '../Counter';
import {
  InfosFooter,
  InfosHeader,
  InfosWrapper,
  Price,
  PriceAndDeleteWrapper,
  StyledImage,
  Subtotal,
  Title,
  Wrapper,
} from './styles';

interface CartItemMobileProps {
  product: IProduct;
  deleteProductInCart: (id: number) => void;
}

export function CartItemMobile({
  product,
  deleteProductInCart,
}: CartItemMobileProps) {
  const { id, title, price, imageUrl } = product;
  return (
    <Wrapper>
      <StyledImage src={imageUrl} alt={title} width={64} height={82} />
      <InfosWrapper>
        <InfosHeader>
          <Title>{title}</Title>
          <PriceAndDeleteWrapper>
            <Price>{formatCurrency(price)}</Price>
            <Image
              src={deleteIconSvg}
              alt=""
              onClick={() => deleteProductInCart(id)}
              width={18}
              height={18}
            />
          </PriceAndDeleteWrapper>
        </InfosHeader>
        <InfosFooter>
          <Counter productId={id} />
          <div>
            <Subtotal>SUBTOTAL</Subtotal>
            <Price>{formatCurrency(price)}</Price>
          </div>
        </InfosFooter>
      </InfosWrapper>
    </Wrapper>
  );
}
