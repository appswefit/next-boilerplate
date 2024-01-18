import React from 'react';
import { Separator } from '../ui/separator';

interface PageProps extends React.PropsWithChildren {
  title: Array<string | number>;
  badge?: React.ReactNode;
}

function Page({ children, title, badge }: PageProps) {
  return (
    <main className="px-6 py-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight flex flex-row items-center gap-3">
          {title.map((el, index) => {
            if (index === title.length - 1) {
              return el;
            }

            return (
              <React.Fragment key={el}>
                {el}
                <Separator orientation="vertical" className="h-8" />
              </React.Fragment>
            );
          })}
        </h1>
        {badge}
      </div>
      {children}
    </main>
  );
}

export default Page;
