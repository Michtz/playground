import { BaseStyles, Button, ThemeProvider } from '@primer/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Button>Click me</Button>
      </BaseStyles>
    </ThemeProvider>
  );
};
export default Home;
