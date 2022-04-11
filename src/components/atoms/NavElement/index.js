import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

import clsx from 'clsx'

const NavElement = ({ elementName, path, toggle, color, type }) => {
  return (
    <>
      <li className={css.element} onClick={toggle}>
        {type === 'link' && (
          <Link
            to={path}
            className={clsx(css.link, {
              [css[color || 'black']]: true,
            })}
            onClick={toggle}
          >
            {elementName}
          </Link>
        )}
        {type === 'anchor' && (
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
  type: PropTypes.string,
}

export default NavElement
