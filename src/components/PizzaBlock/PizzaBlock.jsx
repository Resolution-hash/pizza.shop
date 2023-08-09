import React from 'react';
import s from './PizzaBlock.module.scss';
import PizzaSelector from '../PizzaSelector';
import ButtonAdd from '../../UI/Buttons/ButtonAdd';

const PizzaBlock = ({ pizza }) => {
  
  return (
    <div className={s.pizzaBlock}>
      <img className={s.pizzaBlock__image} src={pizza.imageUrl} alt='Pizza' />
      <h4 className={s.pizzaBlock__title}>{pizza.title}</h4>
      <PizzaSelector types={pizza.types} sizes={pizza.sizes} />
      <div className={s.pizzaBlock__bottom}>
        <div className={s.pizzaBlock__price}>от {pizza.price} ₽</div>
        <ButtonAdd count={pizza.count} id={pizza.id} />
      </div>
    </div>
  );
};

export default PizzaBlock;
