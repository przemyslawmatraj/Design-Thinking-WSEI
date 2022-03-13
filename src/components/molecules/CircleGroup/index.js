/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import Circle from '../../atoms/Circle';
import img1 from '../../../assets/photos/mainPhoto.png';
import img2 from '../../../assets/photos/secondPhoto.jpg';
import circleGrid from '../../../assets/graphics/circleGrid-1.svg';
import clsx from 'clsx';

const CircleGroup = ({ section, top, className }) => {
  return (
    <div className={clsx(css.container, css[`section-${section}`], className)}>
      {section === 1 ? (
        <>
          <Circle color="orange" size="xs" className={clsx(css.positionOrange, css.circleMobile)} />
          <Circle image={img1} alt={'Ludzie rozwiązujący problemy'} size="lg" className={css.positionImage} />
          <Circle color="gray" size="sm" className={clsx(css.positionGray, css.circleMobile)} />
          <Circle color="green" size="md" className={css.positionGreen} />
        </>
      ) : (
        <>
          <Circle color="green" size="md" className={css.positionGreen} />
          <img loading="lazy" src={circleGrid} alt="grafika kółka" className={css.positionGrid} />
          <Circle image={img2} alt={'Ludzie nic nie robiący'} size="lg" className={css.positionImage} />
          <Circle color="gray" size="sm" className={css.positionGray} />
        </>
      )}
    </div>
  );
};

CircleGroup.propTypes = {
  section: PropTypes.number,
  className: PropTypes.string,
  top: PropTypes.number,
};

export default CircleGroup;
