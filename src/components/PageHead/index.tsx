import { Metadata, ResolvingMetadata } from 'next';

interface PageHeadProps {
  title: string;
  description: string;
}

export async function generateMetadata(
  { title, description }: PageHeadProps, 
  parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title,
    description,
    viewport: 'width=device-width, initial-scale=1'
  }
}


export function PageHead({ title, description }: PageHeadProps) {
  return <></>;
}
