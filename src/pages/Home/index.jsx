import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import { useDispatch } from 'react-redux';

import s from './index.module.scss';

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
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
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
      </div>
    </div>
  );
};

export default Home;
