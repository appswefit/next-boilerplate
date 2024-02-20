import loadSpinnerPng from '@/presentation/assets/images/load-spinner.png';
import Image from 'next/image';

export function Loading() {
  return (
    <div className="max-w-[940px] h-screen-1/2 m-auto flex items-center justify-center">
      <Image priority className="h-[50px] w-[50px] animate-spin" src={loadSpinnerPng} alt="" width={50} height={50} />
    </div>
  );
}
