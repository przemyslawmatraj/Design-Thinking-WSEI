import React from 'react';
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss';

// import Button from '../../atoms/Button';
import ReadMore from '../../atoms/ReadMore';
import undraw from '../../../assets/graphics/undraw.svg';
import img1 from '../../../assets/photos/thirdPhoto.png';

const News = () => (
  <>
    <div className={css.container} id="news">
      <div className={css.top}>
        <img loading="lazy" src={undraw} alt="Osoba czytająca artykuły" className={css.undraw} />
        <div className={css.newsInfo}>
          <h1 className={css.title}>Aktualne wydarzenia</h1>
          <p className={css.description}>
            Wydarzenia. Codzienność i nie tylko. Artykuły o bieżących wydarzeniach związanych z działalnością Design Thinking HuB. Czytaj i oglądaj
            najnowsze wiadomości. Udział w konkursach, sukcesy Koła, nowi członkowie, nowi partnerzy.{' '}
          </p>
        </div>
      </div>
      <div className={css.grid}>
        <img loading="lazy" src={img1} alt="zespół szukający rozwiązania" className={css.image} />
        <div className={css.content}>
          <h3 className={css.articleTitle}>Nawiązanie współpracy z VENEO</h3>
          <ReadMore className={css.articleDescription} btnColor="white">
            Kampania launchingowa „Lody Koral Ekipa” promująca produkt impulsowy to najskuteczniejsza kampania marketingowa ostatnich lat w Polsce.
            Hit marketingowy i sprzedażowy w 2021 roku. Kampania VENEO, która zmieniła rynek lodów w Polsce w skali dotychczas niespotykanej,
            przynosząc efekty biznesowe i marketingowe jest dla nas wzorcem pomysłowości i skuteczności projektowania, dlatego wśród partnerów Design
            Thinking Hub pojawiła się ta krakowska firma, nadając sens naszym działaniom. Podpowiadając nam też jakie aktualne trendy obowiązują w
            czasie tworzenia nowych produktów lub usług.
          </ReadMore>
        </div>
      </div>
      {/* <Button className={css.button}>Więcej artykułów</Button> */}
    </div>
  </>
);

export default News;
