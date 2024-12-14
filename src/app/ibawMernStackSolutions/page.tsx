'use client';

import { FC, ReactNode } from 'react';
import FirstExercise from '@/components/IbawMernStackSolutions/FirstExercise';
import SecondExercise from '@/components/IbawMernStackSolutions/SecondExercise';
import ThirdExercise from '@/components/IbawMernStackSolutions/ThirdExercise';

interface Props {
  children?: ReactNode;
}

const IbawContainer: FC<Props> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

interface IbawChildren {
  element: JSX.Element;
  id: string;
}

const Home = (): JSX.Element => {
  /*   const children: IbawChildren[] = [
    { element: <FirstExercise />, id: 'firstElement' },
    { element: <SecondExercise />, id: 'secondElement' },
    { element: <ThirdExercise />, id: 'thirdElement' },
  ];*/

  /* der Teil ist für die abgabe --------------------------
  Ich habe aber den separaten express server auf port 3001 sein lassen
  (finden sie unter /server/server.js und das "index.html" ist /public/staticIbaw.html)
 
   */

  const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
  const helloContinents = Array.from(continents, (c) => `Hello ${c}!`);
  const message = helloContinents.join('');

  return (
    <IbawContainer>
      <h1>Here are my solutions for the Mern Stack Exercises</h1>
      <ul>
        <h1>{message}</h1>
        {/*        {children.map(
          (obj: IbawChildren): JSX.Element => (
            <li key={obj.id}>{obj.element}</li>
          ),
        )}*/}
      </ul>
    </IbawContainer>
  );
};
export default Home;
