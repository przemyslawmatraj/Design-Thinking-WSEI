import React from 'react';
import css from './index.module.scss';
import logo from '../../assets/logo/bigLogo.svg';

import Burger from '../Burger';
import Navbar from '../Navbar';

const Header = () => (
  <>
    <header className={css.container}>
      <img src={logo} className={css.logo} alt="" />
      <Burger />
      <Navbar />
    </header>
  </>
);

export default Header;
