'use client';
import { FC, ReactNode } from 'react';
import FunctionPlayground from '@/components/ui/FunctionPlayground';

interface Props {
  children?: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

const Home = () => (
  <Container>
    <FunctionPlayground />
  </Container>
);
export default Home;
