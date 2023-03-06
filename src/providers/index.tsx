import theme from '@/presentation/styles/theme';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { CartProvider } from './Cart';

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
};

export default Providers;
