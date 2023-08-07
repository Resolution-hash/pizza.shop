import React from 'react'
import s from "./PizzaSelector.module.scss"

const PizzaSelector = () => {
  return (
    <div className={s.selector}>
      <ul>
        <li className={s.active}>тонкое</li>
        <li>традиционное</li>
      </ul>
      <ul>
        <li className={s.active}>26 см.</li>
        <li>30 см.</li>
        <li>40 см.</li>
      </ul>
    </div>
  );
}

export default PizzaSelector