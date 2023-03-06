import { ReactNode } from "react";

import * as S from "./styles";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
