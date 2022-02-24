import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

const Circle = ({ size, color, image, alt }) => (
  <>
    {image === null ? (
      <span className={clsx(css[`variant-${size}`], css[`variant-${color}`])}></span>
    ) : (
      <span className={css[`variant-${size}`]}>
        <img src={image} alt={alt} className={css.image} />
      </span>
    )}
  </>
);

Circle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  isImage: PropTypes.bool,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default Circle;
