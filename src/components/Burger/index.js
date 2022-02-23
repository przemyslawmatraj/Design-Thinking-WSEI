import React from 'react';
import css from './index.module.scss';
import clsx from 'clsx';

const Burger = () => (
  <>
    <div id="burger" className={clsx(css.container, 'displayNone')}>
      <span className={css.line}></span>
      <span className={css.line}></span>
      <span className={css.line}></span>
    </div>
  </>
);

export default Burger;
