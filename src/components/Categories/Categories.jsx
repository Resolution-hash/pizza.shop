import React from 'react';
import s from "./Categories.module.scss"

const Categories = () => {
  return (
    <div className={s.categories}>
      <ul>
        <li className={s.active}>Все</li>
        <li>Мясные</li>
        <li>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
};

export default Categories;
