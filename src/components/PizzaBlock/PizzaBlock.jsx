import React from 'react';
import s from './PizzaBlock.module.scss';
import PizzaSelector from '../PizzaSelector';
import ButtonAdd from '../../UI/Buttons/ButtonAdd';

const PizzaBlock = ({ pizza, count }) => {
  return (
    <div className={s.pizzaBlock}>
      <img className={s.pizzaBlock__image} src={pizza.imgUrl} alt='Pizza' />
      <h4 className={s.pizzaBlock__title}>{pizza.name}</h4>
      <PizzaSelector/>
      <div className={s.pizzaBlock__bottom}>
        <div className={s.pizzaBlock__price}>от {pizza.price} ₽</div>
        <ButtonAdd count={count} id={pizza.id} />
      </div>
    </div>
  );
};

export default PizzaBlock;
