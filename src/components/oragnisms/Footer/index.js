import React from 'react'

import css from './index.module.scss'

const Footer = () => (
  <>
    <div className={css.container}>
      <div className={css.creators}>
        Twórcy platformy:
        <div className={css.github}>Przemysław Matraj</div>
        <div className={css.github}>Adam Wasylewicz</div>
      </div>
    </div>
  </>
)

export default Footer
