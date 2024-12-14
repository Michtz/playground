'use client';
import { createElement, FC } from 'react';
import style from './IbawMernStackSoltuion.module.scss';
// Da ich bei einem Next.js Project kein typisches index.html file habe ich die hello world aufgabe hier implementiert
const FirstExercise: FC = ({}): JSX.Element => {
  const element: JSX.Element = createElement(
    'div',
    { title: 'Outer div' },
    createElement('h1', { className: style['hello-world'] }, 'Hello World!'),
  );

  return <>{element}</>;
};
export default FirstExercise;
