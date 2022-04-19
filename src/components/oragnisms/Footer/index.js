import React from 'react'

import css from './index.module.scss'

const Footer = () => (
  <>
    <div className={css.container}>
      <div className={css.creators}>
        Twórcy platformy:
        <a href="https://github.com/przemyslawmatraj" className={css.github}>
          Przemysław Matraj
        </a>
        <a href="https://github.com/adwas3213" className={css.github}>
          Adam Wasylewicz
        </a>
      </div>
    </div>
  </>
)

export default Footer
