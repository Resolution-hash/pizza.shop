import React from 'react';
import s from './ButtonDefault.module.scss';

const ButtonDefault = ({ content }) => {
  return (
    <button className={s.button}>
      <span>{content}</span>
    </button>
  );
};

export default ButtonDefault;
