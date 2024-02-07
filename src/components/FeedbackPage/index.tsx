import Image from 'next/image';
import { InternalLink } from '../InternalLink';

interface FeedbackPageProps {
  title: string;
  imageUrl: string;
  url: string;
  alt: string;
  actionButtonText?: string;
  imgPadding?: boolean;
  imgWidth: number;
  imgHeight: number;
}

export function FeedbackPage({
  title,
  imageUrl,
  alt,
  url,
  actionButtonText,
  imgPadding = false,
  imgWidth,
  imgHeight,
}: FeedbackPageProps) {
  return (
    <div className="h-auto w-full py-64 flex flex-col items-center justify-center bg-white rounded-[theme.border.radius]">
      <h2 className="mb-32 px-64 text-xlarge font-xbold leading-27 text-center">{title}</h2>
      <Image
        className="mb-32 data-[imgpadding=true]: 0 24px data-[imgpadding=false]: 0"
        data-imgpadding={imgPadding}
        src={imageUrl}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
      />
      <InternalLink
        href={url}
        textLink={actionButtonText ? actionButtonText : 'VOLTAR'}
      />
    </div>
  );
}
