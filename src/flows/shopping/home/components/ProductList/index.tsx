import { ReactNode } from 'react';

import { Wrapper } from './styles';

interface ProductListProps {
  children: ReactNode;
}

export function ProductList({ children }: ProductListProps) {
  return <Wrapper>{children}</Wrapper>;
}
