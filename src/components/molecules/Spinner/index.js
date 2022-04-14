import React from 'react'
import css from './index.module.scss'
import SpinnerElement from '../../atoms/SpinnerElement'
import date from './date'

const Spinner = () => (
  <>
    <div className={css.spinner}>
      <ul className={css.list}>
        {date.map(({ title, date }, index) => (
          <SpinnerElement key={title} count={index + 1} content={`${date} - ${title}`} />
        ))}
      </ul>
    </div>
  </>
)

export default Spinner
