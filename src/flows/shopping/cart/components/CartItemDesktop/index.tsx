import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';
import deleteIconSvg from '@/presentation/assets/images/delete-icon.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';


import { Counter } from '../Counter';

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
    <tr>
      <td className="flex items-center">
        <div className="h-auto mr-12">
          <Image className="w-[89px] h-[114px]" src={image} alt={title} width={89} height={114} />
        </div>
        <div>
          <h3 className="mb-2 text-sm font-bold leading-5 text-primary">{title}</h3>
          <p className="text-base text-black font-bold leading-5">{formatCurrency(price)}</p>
        </div>
      </td>
      <td>
        <Counter productId={id} />
      </td>
      <td>
        <p className="text-base text-black font-bold leading-5">{formatCurrency(price)}</p>
      </td>
      <td>
        <Image
          className="w-[18px] h-[18px]"
          src={deleteIconSvg}
          alt=""
          onClick={() => deleteProductInCart(id)}
          width={18}
          height={18}
        />
      </td>
    </tr>
  );
}
