import Link from "next/link";

import * as S from "./styles";

interface InternalLinkProps {
  href: string;
  textLink: string;
  onClick?: () => void;
}

export function InternalLink({ href, textLink, onClick }: InternalLinkProps) {
  return (
    <Link href={href}>
      <S.TextLink onClick={onClick}>{textLink}</S.TextLink>
    </Link>
  );
}
