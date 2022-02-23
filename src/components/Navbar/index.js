import React from 'react';
import css from './index.module.scss';

import NavElement from '../NavElement';
import Burger from '../Burger';

const Navbar = () => (
  <>
    <nav className={css.navigation}>
      <Burger />
      <ul className={css.list}>
        <NavElement elementName="O nas" path="#about" />
        <NavElement elementName="Aktualności" path="#news" />
        <NavElement elementName="Zespół" path="#team" />
        <NavElement elementName="Partnerzy" path="#partners" />
        <NavElement elementName="Kontakt" path="#contact" />
      </ul>
    </nav>
  </>
);

export default Navbar;
