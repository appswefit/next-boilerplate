import CartPageLayout, { CartPageLayoutProps } from './cart/layout';
import ShoppingHomePageLayout, {
  ShoppingHomePageLayoutProps,
} from './home/layout';
import SuccessPageLayout, { SuccessPageLayoutProps } from './success/layout';

const shoppingRoutes = {
  home: {
    path: '/shopping',
    element: (props: ShoppingHomePageLayoutProps) => (
      <ShoppingHomePageLayout {...props} />
    ),
  },
  cart: {
    path: '/shopping/cart',
    element: (props: CartPageLayoutProps) => <CartPageLayout {...props} />,
  },
  success: {
    path: '/shopping/success',
    element: (props: SuccessPageLayoutProps) => (
      <SuccessPageLayout {...props} />
    ),
  },
};
export default shoppingRoutes;
