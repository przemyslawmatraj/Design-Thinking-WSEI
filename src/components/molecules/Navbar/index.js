import React from 'react';
import css from './index.module.scss';
import PropTypes from 'prop-types';
import NavElement from '../../atoms/NavElement';

const Navbar = ({ toggle, color }) => (
  <>
    <nav className={css.navigation}>
      <ul className={css.list}>
        <NavElement toggle={toggle} elementName="Elevator Pitch" path="#ep" color={color} />
        <NavElement toggle={toggle} elementName="O nas" path="#about" color={color} />
        <NavElement toggle={toggle} elementName="Aktualności" path="#news" color={color} />
        <NavElement toggle={toggle} elementName="Zespół" path="#team" color={color} />
        <NavElement toggle={toggle} elementName="Kontakt" path="#contact" color={color} />
      </ul>
    </nav>
  </>
);

Navbar.propTypes = {
  toggle: PropTypes.func,
  color: PropTypes.string,
};

export default Navbar;
