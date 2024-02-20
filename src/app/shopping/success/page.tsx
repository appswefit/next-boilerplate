
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'WeMovies | Success',
  description: "Página de pagamento realizado",
}

const SuccessPage = ({
  children
}: {
  children: ReactNode;
}) => {
  return <>{children}</>;
};

export default SuccessPage;
