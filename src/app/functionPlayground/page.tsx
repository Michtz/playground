'use client';

import { useExercises } from '@/utils/ExerciseHook';
import { FC, ReactNode } from 'react';
import DisplayTask from '@/components/uiForCodeExercises/CodeExerciseDisplayContainer';

interface Props {
  children?: ReactNode;
}

const Container: FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

const Home = (): JSX.Element => {
  const { files, isLoading } = useExercises();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1>Exercise Files:</h1>
      <ul>
        {files.map(
          (file: string, i: number): JSX.Element => (
            <DisplayTask key={file + i} fileName={file} />
          ),
        )}
      </ul>
    </Container>
  );
};
export default Home;
