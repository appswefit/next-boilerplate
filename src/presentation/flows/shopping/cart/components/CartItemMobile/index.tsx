import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';
import deleteIconSvg from '@/presentation/assets/images/delete-icon.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';

import { Counter } from '../Counter';

interface CartItemMobileProps {
  product: IProduct;
  deleteProductInCart: (id: number) => void;
}

export function CartItemMobile({
  product,
  deleteProductInCart,
}: CartItemMobileProps) {
  const { id, title, price, image } = product;
  return (
    <div className="flex mb-8">
      <Image className="w-16 h-[82px] mr-4" src={image} alt={title} width={64} height={82} />

      <div className="flex flex-col flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold leading-5 text-primary">{title}</h3>
          <div className="flex">
            <p className="text-base text-black font-bold leading-5">{formatCurrency(price)}</p>
            <Image
              className="w-[18px] h-[18px] ml-4 cursor-pointer"
              src={deleteIconSvg}
              alt=""
              onClick={() => deleteProductInCart(id)}
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Counter productId={id} />
          <div>
            <div className="text-xs font-bold leading-4 text-gray">SUBTOTAL</div>
            <p className="text-base text-black font-bold leading-5">{formatCurrency(price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
