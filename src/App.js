import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import { useSelector } from 'react-redux';
import s from "./App.module.scss"

const App = () => {
  const pizza = useSelector((state) => state.pizzaBlock.pizzaItems);

  const PizzasElements = pizza.map(p => {
    return (
      <PizzaBlock key={p.id} pizza={p} count={p.count} />
    )
  })

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
            {PizzasElements}

          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
