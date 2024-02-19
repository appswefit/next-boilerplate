import { Metadata } from 'next';

import ShoppingHomePageLayout from '@/flows/shopping/home/layout';

export const metadata: Metadata = {
  title: 'WeMovies | Home',
  description: "Página inicial",
}

function ShoppingHomePage() {
  return <ShoppingHomePageLayout/>;
};

export default ShoppingHomePage;
