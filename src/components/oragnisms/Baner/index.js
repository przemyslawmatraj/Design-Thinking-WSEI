import React from 'react';
import css from './index.module.scss';

import Button from '../../atoms/Button';
import CircleGroup from '../../molecules/CircleGroup';

const Baner = () => (
  <>
    <div className={css.container}>
      <div className={css.mainSection}>
        <h5 className={css.subTitle}>Ready for future</h5>
        <div>
          <h1 className={css.title}>Design Thinking Hub</h1>
          <p className={css.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore earum repudiandae cumque doloremque, consequatur autem!
          </p>
        </div>
        <Button color="black">Sprawdź</Button>
      </div>
      <CircleGroup section={1} className={css.circleGroup} />
    </div>
  </>
);

export default Baner;
