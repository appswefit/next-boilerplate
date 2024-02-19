import { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <main className="max-w-[960px] w-full min-h-allWithoutHeader mx-auto px-4 md:px-0 pb-7 flex justify-center md:mt-6">{children}</main>;
}
