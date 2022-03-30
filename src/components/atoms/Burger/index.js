import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

const Burger = ({ isOpen, toggle }) => {
  const checkbox = useRef(null);
  useEffect(() => {
    checkbox.current.checked = isOpen;
  }, [isOpen]);
  return (
    <>
      <input id="burger" type="checkbox" ref={checkbox} onClick={toggle} />
      <label htmlFor="burger" className={css.container}>
        <span className={css.spans}>
          <span className={clsx(css.iconBar, css.topBar)}></span>
          <span className={clsx(css.iconBar, css.middleBar)}></span>
          <span className={clsx(css.iconBar, css.bottomBar)}></span>
        </span>
      </label>
    </>
  );
};

Burger.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};

export default Burger;
