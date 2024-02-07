import { ReactNode } from 'react';


interface ProductListProps {
  children: ReactNode;
}

export function ProductList({ children }: ProductListProps) {
  return <div suppressHydrationWarning className="h-auto w-full grid grid-cols-1 gap-16 sm:grid-cols-3">{children}</div>;
}
