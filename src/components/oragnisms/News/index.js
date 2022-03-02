import React from 'react';
import css from './index.module.scss';

import Button from '../../atoms/Button';

import undraw from '../../../assets/graphics/undraw.svg';
import img1 from '../../../assets/photos/thirdPhoto.png';
const News = () => (
  <>
    <div className={css.container}>
      <div className={css.top}>
        <img src={undraw} alt="Osoba czytająca artykuły" className={css.undraw} />
        <div className={css.newsInfo}>
          <h1 className={css.title}>Aktualne wydarzenia</h1>
          <p className={css.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className={css.grid}>
        <img src={img1} alt="zespół szukający rozwiązania" className={css.image} />
        <div className={css.content}>
          <h3 className={css.articleTitle}>Nawiązanie współpracy z VENEO</h3>
          <p className={css.articleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
            lectus.
          </p>
          <Button color="white">CZYTAJ WIĘCEJ</Button>
        </div>
      </div>
      <Button>Więcej artykułów</Button>
    </div>
  </>
);

export default News;
