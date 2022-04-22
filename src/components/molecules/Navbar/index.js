import React, { useState, useEffect } from 'react'

import css from './index.module.scss'
import PropTypes from 'prop-types'
import NavElement from '../../atoms/NavElement'
import useAuth from '../../../hooks/useAuth'
import { adminDashboardNavbar, userDashboardNavbar, landingPageNavbar } from './varaints'
import Token from '../../../utils/token'
const Navbar = ({ toggle, color }) => {
  const { auth } = useAuth()
  const initialNavbar = () => {
    return auth?.data?.username
      ? auth?.data?.roles?.some(({ role }) => role === 'ADMIN')
        ? adminDashboardNavbar
        : userDashboardNavbar
      : landingPageNavbar
  }
  const [navbar, setNavbar] = useState(initialNavbar())

  useEffect(() => {
    setNavbar(initialNavbar())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  useEffect(() => {
    if (Token.exist() && navbar === landingPageNavbar) {
      setNavbar((prev) => prev.filter(({ path }) => path !== '/login' && path !== '/register'))
      setNavbar((prev) => [...prev, { path: '/dashboard', name: 'Dashboard', type: 'link' }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
