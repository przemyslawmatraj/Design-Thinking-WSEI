/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';
import Parallax from '../../../hooks/parallax';

const Circle = ({ size, color, image, alt, className, id }) => {
  let offsetY = Parallax();

  return (
    <>
      {image ? (
        <img
          loading="lazy"
          src={image}
          alt={alt}
          className={clsx(css[`variant-${size}`], className)}
          style={{ transform: `translateY(-${(offsetY % (window.innerHeight * 0.8)) * 0.1}px)` }}
        />
      ) : (
        <span
          className={clsx(css[`variant-${size}`], css[`variant-${color}`], className)}
          style={{ transform: `translate(50%,calc(-50% - ${(offsetY % (window.innerHeight * 0.8)) * 0.05}px))` }}
        ></span>
      )}
    </>
  );
};

Circle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
  isImage: PropTypes.bool,
  image: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Circle;
