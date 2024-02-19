import addIconSvg from '@/presentation/assets/images/add-icon.svg';
import removeIconSvg from '@/presentation/assets/images/remove-icon.svg';
import Image from 'next/image';


interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  return (
    <div className="flex">
      <Image className="w-[18px] h-[18px]" src={removeIconSvg} alt="" width={18} height={18} />
      <input className="w-[59px] mx-3 px-3 py-[3.5px] text-black border border-lightGray bg-white rounded-md" type="text" defaultValue={1} />
      <Image className="w-[18px] h-[18px]" src={addIconSvg} alt="" width={18} height={18} />
    </div>
  );
}
