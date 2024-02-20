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
    <div className="w-full mx-auto p-3 md:p-3 flex flex-col items-center bg-white rounded-lg">
      <Image
        className='mb-2 h-[188px] w-[147px]'
        priority
        width={147}
        height={188}
        src={product.image}
        alt={product.title}
      />
      <h2 className="mt-2 mb-1 text-xs font-bold leading-4 text-darkGray">{product.title}</h2>
      <p className="mb-2 text-base font-bold leading-5 text-primary">{formatCurrency(product.price)}</p>
      <button
        className="w-full py-3 flex items-center justify-center text-xs font-bold leading-4 rounded-md data-[productincart=true]:bg-green data-[productincart=false]:bg-secondary uppercase cursor-pointer"
        data-productincart={hasProductInCart}
        onClick={() => addProductInCart(product)}
      >
        <span className="flex mr-3 gap-1">
          <Image
            className="w-3 h-3"
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
