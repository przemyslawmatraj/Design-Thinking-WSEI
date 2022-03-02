import React from 'react';
import css from './index.module.scss';
import logo from '../../../assets/logo/bigLogo.svg';
import Burger from '../../atoms/Burger';
import Navbar from '../../molecules/Navbar';
import clsx from 'clsx';
const Header = () => (
  <>
    <header className={clsx(css.container)}>
      <img src={logo} className={clsx(css.logo)} alt="" />
      <Burger />
      <Navbar />
    </header>
  </>
);

export default Header;
