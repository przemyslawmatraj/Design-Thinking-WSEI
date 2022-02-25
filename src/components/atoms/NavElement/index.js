import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

const NavElement = ({ elementName, path }) => (
  <>
    <li className={css.element}>
      <a href={path} className={css.link}>
        {elementName}
      </a>
    </li>
  </>
);

NavElement.propTypes = {
  elementName: PropTypes.string,
  path: PropTypes.string,
  isButton: PropTypes.bool,
};

export default NavElement;
