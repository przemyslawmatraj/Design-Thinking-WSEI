/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

const Button = ({ children, path, color }) => (
  <>
    <a
      href={path ? path : '#'}
      className={clsx(css.button, {
        [css[color || 'black']]: true,
      })}
    >
      {children}
    </a>
  </>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
