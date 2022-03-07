import React from 'react';
import css from './index.module.scss';

import Button from '../../atoms/Button';
import ReadMore from '../../atoms/ReadMore';
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
          <ReadMore className={css.articleDescription} btnColor="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vitae accusamus. Id qui, non ipsum unde odio eius esse itaque maxime
            maiores recusandae, aliquam iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vitae accusamus. Id qui, non ipsum
            unde odio eius esse itaque maxime maiores recusandae, aliquam iusto?
          </ReadMore>
        </div>
      </div>
      <Button className={css.button}>Więcej artykułów</Button>
    </div>
  </>
);

export default News;
