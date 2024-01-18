import { ReactElement } from 'react';

export interface RouteObject<P = unknown> {
  path: string;
  element: (props: P) => ReactElement;
}

export interface RouteObjectWithBaseLayout<P = unknown> extends RouteObject<P> {
  getBaseLayout: (page: ReactElement) => ReactElement;
}
