import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <main className="max-w-960 w-full min-h-[calc(100% - var(--header-height))] mx-auto px-16 md:px-0 pb-28 flex justify-center md:mt-24">{children}</main>;
}
