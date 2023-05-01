import React from 'react'
import css from './index.module.scss'
import CalendarElement from '../../atoms/CalendarElement'
import date from './date'

const Calendar = () => (
  <>
    <div className={css.calendar}>
      <ul className={css.list}>
        {date.map(({ title, date, id }, index) => (
          <CalendarElement key={id} count={index + 1} content={`${date} - ${title}`} />
        ))}
      </ul>
    </div>
  </>
)

export default Calendar
