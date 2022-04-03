import React from 'react';
import css from './index.module.scss';

import logo1 from '../../../assets/partnersLogo/kms.png';
import logo2 from '../../../assets/partnersLogo/veneo.png';
import logo3 from '../../../assets/partnersLogo/project5.png';

const Partners = () => (
  <>
    <div className={css.container} id="partners">
      <div className={css.partners}>
        <div className={css.left}>
          <h1 className={css.title}>Współpracujemy z najlepszymi partnerami</h1>
          <p className={css.description}>
            Pracujemy z partnerami, którzy korzystają z wartości Agile na co dzień, tworząc wyjątkowe produkty lub usługi, są otwarci na „wymianę
            myśli i doświadczenia” z młodymi ludźmi, którzy szukają nowych możliwości.
          </p>
        </div>
        <div className={css.right}>
          <img loading="lazy" src={logo1} alt="" className={css.logo} />
          <img loading="lazy" src={logo2} alt="" className={css.logo} />
          <img loading="lazy" src={logo3} alt="" className={css.logo} />
          <img loading="lazy" src={logo1} alt="" className={css.logo} />
        </div>
      </div>
    </div>
  </>
);

export default Partners;
