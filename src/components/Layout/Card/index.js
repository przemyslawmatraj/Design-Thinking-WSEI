import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'

const Card = ({ className, children, id }) => (
    <div
      className={clsx({
        [css.cardDefault]: true,
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
}

export default Card
