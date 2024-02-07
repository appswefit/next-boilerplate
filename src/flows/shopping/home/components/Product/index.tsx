import { IProduct } from '@/hooks/product/dtos/GetProductListDTO';
import cartSvg from '@/presentation/assets/images/cart.svg';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';

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
    <div className="w-full max-w-343px mx-auto p-10 md:p-11 flex flex-col items-center bg-white rounded-lg">
      <Image
        className="h-190px mb-7"
        src={product.imageUrl}
        alt={product.title}
        width={147}
        height={188}
      />
      <h2 className="mt-8 mb-2 text-xs font-xbold leading-16 text-darkGray">{product.title}</h2>
      <p className="mb-8 text-medium font-xbold leading-22 text-primary">{formatCurrency(product.price)}</p>
      <button
        className="w-full py-11 flex items-center justify-center text-xs font-xbold leading-16 rounded-md data-[productInCart=true]: 'bg-green' data-[productInCart=false]: 'bg-secondary' uppercase cursor-pointer"
        data-productInCart={hasProductInCart}
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
      </button>
    </div>
  );
}
