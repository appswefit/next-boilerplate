import addIconSvg from '@/presentation/assets/images/add-icon.svg';
import removeIconSvg from '@/presentation/assets/images/remove-icon.svg';
import Image from 'next/image';


interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  return (
    <div className="flex">
      <Image src={removeIconSvg} alt="" width={18} height={18} />
      <input className="w-59 mx-11 px-12 py-3.5 border border-lightGray rounded-[theme.border.radius]" type="text" defaultValue={1} />
      <Image src={addIconSvg} alt="" width={18} height={18} />
    </div>
  );
}
