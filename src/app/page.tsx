import { BaseStyles, ThemeProvider } from '@primer/react';
import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

interface AppPropsWithLayout extends AppProps {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
}

const Home: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  );
};
export default Home;
