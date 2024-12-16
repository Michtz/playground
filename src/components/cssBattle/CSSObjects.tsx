'use client';
import { FC } from 'react';
import style from './CSSObjects.module.scss';
export const CSSBattle: FC = ({}): JSX.Element => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.a}></div>
        <div className={style.b}></div>
        <div className={style.c}></div>
      </div>
    </div>
  );
};
