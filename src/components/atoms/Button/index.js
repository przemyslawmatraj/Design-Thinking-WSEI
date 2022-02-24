import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

const Button = ({ children, path }) => (
  <>
    <a href={path ? path : '#'} className={css.button}>
      {children}
    </a>
  </>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default Button;
