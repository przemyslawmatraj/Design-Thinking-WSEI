import React from 'react'
import css from './index.module.scss'
import PropTypes from 'prop-types'
import NavElement from '../../atoms/NavElement'

const Navbar = ({ toggle, color, navVariant }) => (
  <>
    <nav className={css.navigation}>
      <ul className={css.list}>
        <NavElement toggle={toggle} variant={navVariant} elementName="Elevator Pitch" path="/#ep" color={color} />
        <NavElement toggle={toggle} variant={navVariant} elementName="O nas" path="/#about" color={color} />
        <NavElement toggle={toggle} variant={navVariant} elementName="Aktualności" path="/#news" color={color} />
        <NavElement toggle={toggle} variant={navVariant} elementName="Zespół" path="/#team" color={color} />
        <NavElement toggle={toggle} variant={navVariant} elementName="Kontakt" path="/#contact" color={color} />
        <NavElement toggle={toggle} variant={navVariant} elementName="Zarejestruj się" path="/register" color={color} />
      </ul>
    </nav>
  </>
)

Navbar.propTypes = {
  toggle: PropTypes.func,
  color: PropTypes.string,
  navVariant: PropTypes.string,
}

export default Navbar
