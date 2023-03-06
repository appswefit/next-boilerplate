import theme from '@/presentation/styles/theme';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const GlobalProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default GlobalProviders;
