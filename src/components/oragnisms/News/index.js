import React from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

import ReadMore from '../../atoms/ReadMore'
import undraw from '../../../assets/graphics/undraw.webp'
import img1 from '../../../assets/photos/news.png'

const News = () => (
  <>
    <div className={css.container} id="news">
      <div className={css.top}>
        <img loading="lazy" src={undraw} alt="Osoba czytająca artykuły" className={css.undraw} />
        <div className={css.newsInfo}>
          <h1 className={css.title}>Aktualne wydarzenia</h1>
          <p className={css.description}>
            Wydarzenia. Codzienność i nie tylko. Artykuły o bieżących wydarzeniach związanych z działalnością Design
            Thinking HuB. Czytaj i oglądaj najnowsze wiadomości. Udział w konkursach, sukcesy Koła, nowi członkowie,
            nowi partnerzy.{' '}
          </p>
        </div>
      </div>
      <div className={css.grid}>
        <img loading="lazy" src={img1} alt="zespół szukający rozwiązania" className={css.image} />
        <div className={css.content}>
          <h3 className={css.articleTitle}>Małopolski Festiwal Innowacji </h3>
          <ReadMore btnColor="white" className={css.paragraphs}>
            <p>
              Małopolski Festiwal Innowacji to wyjątkowe święto innowacji i nowoczesnych technologii. Podczas
              tegorocznej edycji wydarzenia po raz pierwszy pojawi się również{' '}
              <strong>Wyższa Szkoła Ekonomii i Informatyki</strong> z międzyuczelnianym{' '}
              <strong>Konkursem WSEI Elevator pitch 2022</strong>!
              <p>
                Wydarzenie to na pewno będzie wyjątkową okazją do rozmowy o innowacjach, przedsiębiorczości, współpracy
                pomiędzy nauką i biznesem, poznamy też studenckie startupy, dowiemy się jak wykorzystać Design Thinking
                w praktyce, postaramy się zaszczepić ducha innowacyjności i kreatywności wśród studentów.
              </p>
            </p>
            <p>
              <a
                href="https://innowacyjna.malopolska.pl/malopolski-festiwal-innowacji/mfi-2022/program/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Program Małopolskiego Festiwalu Innowacji
              </a>
            </p>
          </ReadMore>
        </div>
      </div>
    </div>
  </>
)

export default News
