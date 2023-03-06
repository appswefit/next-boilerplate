import { IProduct } from '@/infrastructure/services/ProductService/dtos/FetchProductsDTO';
import successSvg from '@/presentation/assets/images/success.svg';
import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import { Header } from '@/presentation/components/Header';
import { PageHead } from '@/presentation/components/PageHead';
import { PageWrapper } from '@/presentation/components/PageWrapper';

import shoppingRoutes from '../routes';

export interface SuccessPageLayoutProps {
  cart: IProduct[];
}

export default function SuccessPageLayout({ cart }) {
  return (
    <>
      <PageHead
        title="WeMovies | Success"
        description="Página de pagamento realizado"
      />
      <Header totalCartValue={cart.length} />
      <PageWrapper>
        <FeedbackPage
          title="Compra realizada com sucesso!"
          imageUrl={successSvg}
          alt=""
          url={shoppingRoutes.home.path}
          imgPadding
          imgWidth={295}
          imgHeight={307}
        />
      </PageWrapper>
    </>
  );
}
