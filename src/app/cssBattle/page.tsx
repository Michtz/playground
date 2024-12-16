'use client';
import { FC, ReactNode } from 'react';
import { CSSBattle } from '@/components/cssBattle/CSSObjects';

interface Props {
  children?: ReactNode;
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

const Home = (): JSX.Element => {
  return <CSSBattle />;
};
export default Home;
