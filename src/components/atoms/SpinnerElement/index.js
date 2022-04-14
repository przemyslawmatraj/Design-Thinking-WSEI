import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import clsx from 'clsx'

const SpinnerElement = ({ count, content }) => {
  return (
    <li
      className={clsx({
        [css.spinnerElement]: true,
        [css[`spinnerElement${count}`]]: true,
      })}
    >
      {content}
    </li>
  )
}

SpinnerElement.propTypes = {
  count: PropTypes.number,
  content: PropTypes.string,
}

export default SpinnerElement
