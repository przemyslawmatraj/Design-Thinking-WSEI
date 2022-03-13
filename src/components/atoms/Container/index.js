import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

const Container = ({ children, overflow }) => (
  <div
    className={clsx(css.wrapper, {
      [css.overflow]: overflow === false ? false : true,
    })}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  overflow: PropTypes.bool,
};

export default Container;
