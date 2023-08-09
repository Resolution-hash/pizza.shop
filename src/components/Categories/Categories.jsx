import React from 'react';
import s from './Categories.module.scss';
import { useSelector } from 'react-redux';
const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  const [activeIndex, setActiveIndex] = React.useState(1);

  const categoriesElements = categories.map((c) => {
    return (
      <li
        className={activeIndex === c.id ? s.active : ''}
        key={c.id}
        onClick={() => setActiveIndex(c.id)}
      >
        {c.name}
      </li>
    );
  });

  return (
    <div className={s.categories}>
      <ul>
        {categoriesElements}
      </ul>
    </div>
  );
};

export default Categories;
