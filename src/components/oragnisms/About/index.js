import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

import CircleGroup from '../../molecules/CircleGroup';
import SectionInfo from '../../molecules/SectionInfo';
import ReadMore from '../../atoms/ReadMore';
import circleGrid from '../../../assets/graphics/circleGrid-2.svg';

const About = ({ className }) => (
  <>
    <div id="about" className={clsx(css.container, className)}>
      <SectionInfo subTitle="JASNY CEL | ABY ŻYŁO SIĘ LEPIEJ" title="Czym się zajmujemy?">
        <ReadMore btnColor="black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis saepe assumenda asperiores, nemo consectetur placeat quidem error enim
          beatae animi dolore illum esse distinctio eius laudantium. Illum assumenda quam non quas ex facilis optio odio. Delectus aliquid nam modi at
          dignissimos reprehenderit quae ea sequi quisquam, deleniti temporibus qui laboriosam!
        </ReadMore>
      </SectionInfo>
      <CircleGroup section={2} className={css.circleGroup} />
      <img loading="lazy" src={circleGrid} alt="" className={css.circlesBottom} />
      <img loading="lazy" src={circleGrid} alt="" className={css.circlesBottom} />
    </div>
  </>
);

About.propTypes = {
  className: PropTypes.string,
};

export default About;
