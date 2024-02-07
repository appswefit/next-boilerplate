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
  const { id, title, price, imageUrl } = product;
  return (
    <div className="flex mb-32">
      <Image className="h-82 w-64 mr-16" src={imageUrl} alt={title} width={64} height={82} />

      <div className="flex flex-col flex-1">
        <div className="mb-16 flex items-center justify-between">
          <h3 className="text-small font-xbold leading-19 text-primary">{title}</h3>
          <div className="flex">
            <p className="text-medium font-xbold leading-22">{formatCurrency(price)}</p>
            <Image
              className="ml-16 cursor-pointer"
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
            <div className="text-xsmall font-bold leading-16 text-gray">SUBTOTAL</div>
            <p className="text-medium font-xbold leading-22">{formatCurrency(price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
