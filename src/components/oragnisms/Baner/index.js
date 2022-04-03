import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';

import CircleGroup from '../../molecules/CircleGroup';
import SectionInfo from '../../molecules/SectionInfo';

const Baner = ({ className }) => (
  <>
    <div className={clsx(css.container, className)}>
      <SectionInfo subTitle="Ready for future" title="Design Thinking Hub" header={1} button="Sprawdź" btnColor="black" btnPath="#about">
        Koło Naukowe Studentów WSEI – Design Thinking HuB to grupa ambitnych młodych ludzi, którzy rozwijają się dzięki współpracy w zespole i
        osiągają korzyści zarówno indywidualne, jak i zawodowe z dzielenia się wiedzą, opiniami oraz nowymi pomysłami w praktyce.
        <br />
        <br />
        Praca w Design Thinking HuB przynosi studentom WSEI nowe możliwości rozwoju kreatywności w zakresie znacznie wykraczającym poza program
        studiów.
      </SectionInfo>
      <CircleGroup section={1} className={css.circleGroup} />
    </div>
  </>
);

Baner.propTypes = {
  className: PropTypes.string,
};

export default Baner;
