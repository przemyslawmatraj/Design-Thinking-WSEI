import React from 'react'

import css from './index.module.scss'
import PropTypes from 'prop-types'
import NavElement from '../../atoms/NavElement'
import useAuth from '../../../hooks/useAuth'
import { adminDashboardNavbar, userDashboardNavbar, landingPageNavbar } from './varaints'
const Navbar = ({ toggle, color }) => {
  const { auth } = useAuth()
  const navbar = auth?.data?.username
    ? auth?.data?.roles?.some(({ role }) => role === 'ADMIN')
      ? adminDashboardNavbar
      : userDashboardNavbar
    : landingPageNavbar

  return (
    <>
      <nav className={css.navigation}>
        <ul className={css.list}>
          {navbar.map(({ name, path, type }) => (
            <NavElement key={name} elementName={name} path={path} toggle={toggle} color={color} type={type} />
          ))}
        </ul>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  toggle: PropTypes.func,
  color: PropTypes.string,
}

export default Navbar
