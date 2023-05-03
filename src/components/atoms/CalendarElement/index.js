import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'

const CalendarElement = ({ count, content }) => {
  return (
    <li
      className={clsx({
        [css.calendarElement]: true,
        [css[`calendarElement${count}`]]: true,
      })}
    >
      {content}
    </li>
  )
}

CalendarElement.propTypes = {
  count: PropTypes.number,
  content: PropTypes.string,
}

export default CalendarElement
