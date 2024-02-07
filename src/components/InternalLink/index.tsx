import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  textLink: string;
  onClick?: () => void;
}

export function InternalLink({ href, textLink, onClick }: InternalLinkProps) {
  return (
    <Link href={href}>
      <p className="h-40 px-60 flex items-center justify-center text-small font-xbold uppercase text-center rounded-[theme.border.radius] bg-secondary" onClick={onClick}>{textLink}</p>
    </Link>
  );
}
