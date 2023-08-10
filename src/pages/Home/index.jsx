import React, { useEffect } from 'react';
import Categories from '../../components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import Sort from '../../components/Sort';
import s from './index.module.scss';
import { getPizzas } from '../../store/pizzaSlice';
import PizzaBlock from '../../components/PizzaBlock';
import Skeleton from '../../components/PizzaBlock/Skeleton';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  const { pizzas, isPending } = useSelector((state) => state.pizzaBlock);

  const PizzasElements = pizzas.map((p) => {
    return <PizzaBlock key={p.id} pizza={p} />;
  });
  return (
    <>
      <div className={s.container}>
        <div className={s.content__top}>
          <Categories />
          <Sort />
        </div>
        <h2 className={s.content__title}>Все пиццы</h2>
        <div className={s.content__items}>
          {isPending
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : PizzasElements}
        </div>
      </div>
    </>
  );
};

export default Home;
