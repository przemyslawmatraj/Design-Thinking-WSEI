import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

import CircleGroup from '../../molecules/CircleGroup';
import SectionInfo from '../../molecules/SectionInfo';

import circleGrid from '../../../assets/graphics/circleGrid-2.svg';

const About = ({ className }) => (
  <>
    <div className={clsx(css.container, className)}>
      <SectionInfo subTitle="JASNY CEL | ABY ŻYŁO SIĘ LEPIEJ" title="CZYM SIĘ ZAJMUJEMY?" button="CZYTAJ WIĘCEJ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis saepe assumenda asperiores, nemo consectetur placeat quidem error enim
        beatae animi dolore illum esse distinctio eius laudantium. <br />
        <br />
        Illum assumenda quam non quas ex facilis optio odio. Delectus aliquid nam modi at dignissimos reprehenderit quae ea sequi quisquam, deleniti
        temporibus qui laboriosam!
      </SectionInfo>
      <CircleGroup section={2} className={css.circleGroup} />
      <img src={circleGrid} alt="" className={css.circlesBottom} />
      <img src={circleGrid} alt="" className={css.circlesBottom} />
    </div>
  </>
);

About.propTypes = {
  className: PropTypes.string,
};

export default About;
