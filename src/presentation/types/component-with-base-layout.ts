import { ReactElement } from 'react';

interface ComponentWithBaseLayout<P = unknown> extends React.FC<P> {
  getBaseLayout: (page: ReactElement) => ReactElement;
}

export default ComponentWithBaseLayout;
