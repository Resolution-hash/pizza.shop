import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/pizza-logo.svg';
import ButtonCart from '../../UI/Buttons/ButtonCart/ButtonCart';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.header__logo}>
          <img width='38' src={logo} alt='Pizza logo' />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className={s.header__cart}>
          <ButtonCart/>
        </div>
      </div>
    </div>
  );
};

export default Header;
