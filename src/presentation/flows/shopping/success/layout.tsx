import successSvg from '@/presentation/assets/images/success.svg';
import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import { PageHead } from '@/presentation/components/PageHead';

import shoppingRoutes from '../routes';

export interface SuccessPageLayoutProps {}

export default function SuccessPageLayout({}: SuccessPageLayoutProps) {
  return (
    <>
      <PageHead
        title="WeMovies | Success"
        description="Página de pagamento realizado"
      />
      <FeedbackPage
        title="Compra realizada com sucesso!"
        imageUrl={successSvg}
        alt=""
        url={shoppingRoutes.home.path}
        imgPadding
        imgWidth={295}
        imgHeight={307}
      />
    </>
  );
}
