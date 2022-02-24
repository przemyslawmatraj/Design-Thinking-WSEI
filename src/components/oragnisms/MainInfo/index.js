import React from 'react';

import Button from '../../atoms/Button';

import css from './index.module.scss';

const MainInfo = () => (
  <>
    <div className={css.container}>
      <h4 className={css.subTitle}>Ready for future</h4>
      <h1 className={css.title}>Design Thinking Hub</h1>
      <p className={css.description}>
        This table lists font size values in px for your type scales at the min and max viewport widths entered above viewport widths entered above.
      </p>
      <Button color="black">Sprawdź</Button>
    </div>
  </>
);

export default MainInfo;
