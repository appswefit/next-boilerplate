'use client'

import shoppingRoutes from '@/presentation/flows/shopping/routes';
import bagSvg from '@/presentation/assets/images/bag.svg';
import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@/context/Cart';


export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { cart } = useCart();
  return (
    <header className="h-[var(--header-height)] max-w-[960px] mx-auto px-3 flex flex-row items-center justify-between">
      <Link className="text-xl font-bold leading-7" href={shoppingRoutes.home.path}>WeMovies</Link>
      <div className="flex flex-row items-center gap-3">
        <span className="flex flex-col justify-center text-end">
          <strong className="hidden md:block text-xs font-bold leading-5 text-white">Meu Carrinho</strong>
          <p className="text-xs font-bold leading-4 text-gray"> {cart.length} itens</p>
        </span>
        <Link href={shoppingRoutes.cart.path}>
          <Image className="h-[26px] w-[30px]" src={bagSvg} alt="" width={30} height={26} />
        </Link>
      </div>
    </header>
  );
}
