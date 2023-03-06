import { InternalLink } from '../InternalLink';
import { StyledImage, Wrapper } from './styles';

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
    <Wrapper>
      <h2>{title}</h2>
      <StyledImage
        $imgPadding={imgPadding}
        src={imageUrl}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
      />
      <InternalLink
        href={url}
        textLink={actionButtonText ? actionButtonText : 'VOLTAR'}
      />
    </Wrapper>
  );
}
