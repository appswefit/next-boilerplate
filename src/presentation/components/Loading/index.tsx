import loadSpinnerPng from '@/presentation/assets/images/load-spinner.png';
import Image from 'next/image';

import { Wrapper } from './styles';

export function Loading() {
  return (
    <Wrapper>
      <Image src={loadSpinnerPng} alt="" width={50} height={50} />
    </Wrapper>
  );
}
