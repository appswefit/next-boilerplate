import Link from 'next/link';

interface InternalLinkProps {
  href: string;
  textLink: string;
  onClick?: () => void;
}

export function InternalLink({ href, textLink, onClick }: InternalLinkProps) {
  return (
    <Link href={href}>
      <p className="h-10 px-14 flex items-center justify-center text-sm font-bold uppercase text-center rounded-md bg-secondary" onClick={onClick}>{textLink}</p>
    </Link>
  );
}
