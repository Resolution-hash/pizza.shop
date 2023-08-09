import React, { useState } from 'react';
import s from './PizzaSelector.module.scss';
import cn from 'classnames';

const PizzaSelector = ({ types, sizes }) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);

  const typeNames = ['тонкое', 'традиционное'];

  const sizesPizzasElements = sizes.map((size, index) => {
    return (
      <li
        className={activeSize === index ? cn(s.items, s.active) : s.items}
        onClick={() => setActiveSize(index)}
        key={size}
      >{`${size} см.`}</li>
    );
  });

  const typesPizzasElements = types.map((typeId, index) => {
    return (
      <li
        className={activeType === index ? cn(s.items, s.active) : s.items}
        onClick={() => setActiveType(typeId)}
        key={typeId}
      >
        {typeNames[typeId]}
      </li>
    );
  });

  return (
    <div className={s.selector}>
      <ul>
        {/* <li className={s.active}>тонкое</li>
        <li>традиционное</li> */}
        {typesPizzasElements}
      </ul>
      <ul>
        {sizesPizzasElements}

        {/* <li className={s.active}>26 см.</li>
        <li>30 см.</li>
        <li>40 см.</li> */}
      </ul>
    </div>
  );
};

export default PizzaSelector;
