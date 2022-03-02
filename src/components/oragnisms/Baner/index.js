import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

import CircleGroup from '../../molecules/CircleGroup';
import SectionInfo from '../../molecules/SectionInfo';

const Baner = ({ className }) => (
  <>
    <div className={clsx(css.container, className)}>
      <SectionInfo subTitle="Ready for future" title="Design Thinking Hub" header={1} button="Sprawdź">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum repudiandae cumque doloremque, consequatur autem!
      </SectionInfo>
      <CircleGroup section={1} className={css.circleGroup} />
    </div>
  </>
);

Baner.propTypes = {
  className: PropTypes.string,
};

export default Baner;
