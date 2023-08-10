import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/pizza-logo.svg';
import ButtonCart from '../../UI/Buttons/ButtonCart/ButtonCart';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/cart');
  };
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Link to='/'>
          <div className={s.header__logo}>
            <img width='38' src={logo} alt='Pizza logo' />
            <div className={s.title}>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <Link to='/cart'>
          <ButtonCart onClick={handleButtonClick} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
