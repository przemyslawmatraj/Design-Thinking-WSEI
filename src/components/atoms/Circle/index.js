/* eslint-disable css-modules/no-unused-class */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

const Circle = ({ size, color, image, alt, section, style, className }) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {image ? (
        <img
          src={image}
          alt={alt}
          className={clsx(css[`variant-${size}`], css.shadow, className)}
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        />
      ) : (
        <span
          className={clsx(css[`variant-${size}`], css[`variant-${color}`], className)}
          style={{ transform: `translate(50%,calc(-50% - ${offsetY * 0.1}px))` }}
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
  section: PropTypes.number,
  style: PropTypes.object,
};

export default Circle;
