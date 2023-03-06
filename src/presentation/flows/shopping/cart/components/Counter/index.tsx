import addIconSvg from '@/presentation/assets/images/add-icon.svg';
import removeIconSvg from '@/presentation/assets/images/remove-icon.svg';
import Image from 'next/image';

import { Wrapper } from './styles';

interface CounterProps {
  productId: number;
}

export function Counter({ productId }: CounterProps) {
  return (
    <Wrapper>
      <Image src={removeIconSvg} alt="" width={18} height={18} />
      <input type="text" defaultValue={1} />
      <Image src={addIconSvg} alt="" width={18} height={18} />
    </Wrapper>
  );
}
