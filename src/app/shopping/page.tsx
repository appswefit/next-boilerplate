import { Metadata } from 'next';

import ShoppingHomePageLayout from '@/presentation/flows/shopping/home/layout';

export const metadata: Metadata = {
  title: 'WeMovies | Home',
  description: "Página inicial",
}

function ShoppingHomePage() {
  return <ShoppingHomePageLayout/>;
};

export default ShoppingHomePage;
