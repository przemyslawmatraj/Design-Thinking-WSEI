import React, { useState } from 'react';
import css from './index.module.scss';
import logo from '../../../assets/logo/bigLogo.svg';
import Burger from '../../atoms/Burger';
import Navbar from '../../molecules/Navbar';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className={css.container}>
        <img loading="lazy" src={logo} className={css.logo} alt="" />
        <Burger isOpen={isOpen} toggle={toggleBurger} />
        <Navbar toggle={toggleBurger} />
      </header>
    </>
  );
};

export default Header;
