import { ReactNode } from 'react';


interface ProductListProps {
  children: ReactNode;
}

export function ProductList({ children }: ProductListProps) {
  return <div className='grid grid-cols-1 h-fit w-full  gap-4 md:grid-cols-3'>{children}</div>;
}
