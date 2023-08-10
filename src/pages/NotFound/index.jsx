import React from 'react';
import s from './index.module.scss';
import ButtonDefault from '../../UI/Buttons/ButtonDefault';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h1>😕</h1>

        <h2>Ничего не найдено</h2>
        <p className={s.description}>
          К сожалению, данная страницы отсутствует в нашем интернет-магазине
        </p>
        <Link to='/'>
          <ButtonDefault content={'Вернуться назад'} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
