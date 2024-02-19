import { FeedbackPage } from '@/presentation/components/FeedbackPage';
import successSvg from '@/presentation/assets/images/success.svg';

import shoppingRoutes from '@/flows/shopping/routes';

export interface SuccessPageLayoutProps {}

export default function SuccessPageLayout({}: SuccessPageLayoutProps) {
  return (
    <>
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
