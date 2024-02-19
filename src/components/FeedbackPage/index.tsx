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
    <div className="h-fit w-full p-0 pt-4 pb-4 flex flex-col items-center justify-center bg-white rounded-lg">
      <h2 className="mb-2 px-16 text-2xl text-black font-bold leading-7 text-center">{title}</h2>
      <Image
        data-imgpadding={imgPadding}
        className={`h-[266px] w-[447px] mb-8 data-[imgpadding=true]:px-6 data-[imgpadding=false]:p-0`}
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
