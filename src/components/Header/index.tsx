import shoppingRoutes from '@/flows/shopping/routes';
import bagSvg from '@/presentation/assets/images/bag.svg';
import Image from 'next/image';
import Link from 'next/link';

import { useCart } from '@/context/Cart';


export interface HeaderProps {}

export function Header({}: HeaderProps) {
  const { cart } = useCart();
  return (
    <header className="h-[var(--header-height)] max-w-960 mx-auto px-10 flex flex-row items-center justify-between">
      <Link className="text-xlarge font-xbold leading-27" href={shoppingRoutes.home.path}>WeMovies</Link>
      <div className="flex flex-row items-center gap-[theme.spacings.xsmall]">
        <span className="flex flex-col justify-center text-end">
          <strong className="hidden md:block text-small font-bold leading-19 text-white">Meu Carrinho</strong>
          <p className="text-xsmall font-bold leading-16 text-gray"> {cart.length} itens</p>
        </span>
        <Link href={shoppingRoutes.cart.path}>
          <Image src={bagSvg} alt="" width={30} height={26} />
        </Link>
      </div>
    </header>
  );
}
