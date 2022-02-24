import React from 'react';
import css from './index.module.scss';
import clsx from 'clsx';

const Burger = () => (
  <>
    <input id="burger" type="checkbox" />
    <label htmlFor="burger" className={css.container}>
      <span className={css.spans}>
        <span className={clsx(css.iconBar, css.topBar)}></span>
        <span className={clsx(css.iconBar, css.middleBar)}></span>
        <span className={clsx(css.iconBar, css.bottomBar)}></span>
      </span>
    </label>
  </>
);

export default Burger;
