import bagSvg from '@/presentation/assets/images/bag.svg';
import shoppingRoutes from '@/presentation/flows/shopping/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useCart } from '@/providers/Cart';

import { Cart, CartItens, Logo, MyCart, Wrapper } from './styles';

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { cart } = useCart();
  return (
    <Wrapper>
      <Logo href={shoppingRoutes.home.path}>WeMovies</Logo>
      <Cart>
        <span>
          <MyCart>Meu Carrinho</MyCart>
          <CartItens> {cart.length} itens</CartItens>
        </span>
        <Link href={shoppingRoutes.cart.path}>
          <Image src={bagSvg} alt="" width={30} height={26} />
        </Link>
      </Cart>
    </Wrapper>
  );
}
