import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import clsx from 'clsx'

const Card = ({ className, children, flexDirection, id }) => (
  <div
    className={clsx({
      [css.cardDefault]: true,
      [css[flexDirection]]: !!flexDirection,
      [className]: className,
    })}
    id={id}
  >
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  flexDirection: PropTypes.string,
}

export default Card
