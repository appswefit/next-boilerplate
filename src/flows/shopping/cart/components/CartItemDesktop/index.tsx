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
  const { id, title, price, imageUrl } = product;
  return (
    <tr className="border-b border-gray-400">
      <td className="flex items-center">
        <div className="mr-52">
          <Image className="h-114 w-89" src={imageUrl} alt={title} width={89} height={114} />
        </div>
        <div>
          <h3 className="mb-8 text-small font-xbold leading-19 text-primary">{title}</h3>
          <p className="text-medium font-xbold leading-22">{formatCurrency(price)}</p>
        </div>
      </td>
      <td>
        <Counter productId={id} />
      </td>
      <td>
        <p className="text-medium font-xbold leading-22">{formatCurrency(price)}</p>
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
    </tr>
  );
}
