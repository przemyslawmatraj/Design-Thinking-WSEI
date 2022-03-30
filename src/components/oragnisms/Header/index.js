import React, { useState } from 'react';
import css from './index.module.scss';
import logo from '../../../assets/logo/bigLogo.svg';
import Burger from '../../atoms/Burger';
import Navbar from '../../molecules/Navbar';
import clsx from 'clsx';
const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header className={clsx(css.container)}>
        <img loading="lazy" src={logo} className={clsx(css.logo)} alt="" />
        <Burger isOpen={isOpen} toggle={toggleBurger} />
        <Navbar toggle={toggleBurger} />
      </header>
    </>
  );
};

export default Header;
