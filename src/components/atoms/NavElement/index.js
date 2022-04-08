import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

import clsx from 'clsx'

const NavElement = ({ elementName, path, toggle, color, navVariant }) => {
  return (
    <>
      <li className={css.element} onClick={toggle}>
        {navVariant === 'link' ? (
          <Link
            to={path}
            className={clsx(css.link, {
              [css[color || 'black']]: true,
            })}
            onClick={toggle}
          >
            {elementName}
          </Link>
        ) : (
          <a
            href={path}
            className={clsx(css.link, {
              [css[color || 'black']]: true,
            })}
            onClick={toggle}
          >
            {elementName}
          </a>
        )}
      </li>
    </>
  )
}

NavElement.propTypes = {
  elementName: PropTypes.string,
  path: PropTypes.string,
  toggle: PropTypes.func,
  color: PropTypes.string,
  navVariant: PropTypes.string.isRequired,
}

export default NavElement
