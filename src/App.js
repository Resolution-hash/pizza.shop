import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";
import s from "./App.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getPizzas } from "./store/pizzaSlice";
import Home from "./pages/Home";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  const { pizzas, isPending } = useSelector((state) => state.pizzaBlock);


  const PizzasElements = pizzas.map(p => {
    return (
      <PizzaBlock key={p.id} pizza={p} />
    )
  })

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
    // <div className={s.wrapper}>
    //   <Header />
    //   <div className={s.content}>
    //     <div className={s.container}>
    //       <div className={s.content__top}>
    //         <Categories />
    //         <Sort />
    //       </div>
    //       <h2 className={s.content__title}>Все пиццы</h2>
    //       <div className={s.content__items}>
    //         {isPending ? (
    //           [...new Array(6)].map((_, index) => <Skeleton key={index} />)
    //         ) : (
    //           PizzasElements
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
}

export default App;
