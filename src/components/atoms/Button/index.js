/* eslint-disable css-modules/no-unused-class */
import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'

const Button = ({ children, path, color, className, tag, variant, ...props }) =>
  tag === 'span' ? (
    <span
      {...props}
      className={clsx(
        css.button,
        {
          [css[color || 'black']]: true,
          [css[variant || 'variant1']]: true,
        },
        className
      )}
    >
      {children}
    </span>
  ) : (
    <a
      href={path ? path : '#'}
      {...props}
      className={clsx(
        css.button,
        {
          [css[color || 'black']]: true,
          [css[variant || 'variant1']]: true,
        },
        className
      )}
    >
      {children}
    </a>
  )

Button.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.string,
  variant: PropTypes.string,
}

export default Button
