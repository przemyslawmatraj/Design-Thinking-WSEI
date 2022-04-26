import React from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

import ReadMore from '../../atoms/ReadMore'
import undraw from '../../../assets/graphics/undraw.svg'
import img1 from '../../../assets/photos/thirdPhoto.png'

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
          <h3 className={css.articleTitle}>Nawiązanie współpracy z Kraków Miastem Startupów</h3>
          <ReadMore btnColor="white" className={css.paragraphs}>
            <p>
              Fundacja Kraków Miastem Startupów to jedna z najprężniej działających organizacji startupowych w
              Małopolsce. Funkcjonuje ona non profit od 2015 roku, dbając o rozwój przedsiębiorczości i innowacji oraz
              kondycję krakowskiego ekosystemu startupowego.
            </p>{' '}
            <p>
              KMS inspiruje i doradza młodym przedsiębiorcom, jak stawiać pierwsze kroki w innowacjach, gdzie szukać
              finansowania i jak budować swoje przewagi konkurencyjne poprzez organizację wyzwań biznesowych i
              społecznych w ramach Akademickich Maratonów Innowacji, Jesiennego Uniwersytetu Przedsiębiorczości i
              Innowacji oraz programu Krk InnoTech Starter.
            </p>
            <p>
              Mottem KMS jest „łączenie kropek”, czyli zapewnienie ciągłego przepływu informacji i kontaktów, docieranie
              do właściwych osób, które mogą inwestować, wspierać oraz rozwijać przedsiębiorczość w Krakowie w
              przyszłości. W ciągu kilku lat działalności Fundacja zorganizowała kilkaset wydarzeń sieciujących,
              wykształciła kilka tysięcy osób, wypuściła wiele innowacyjnych przedsiębiorstw oraz wydała książkę -
              Pierwszy krakowski przewodnik startupowy, która stanowi inspirację dla startupów w świecie biznesu.
            </p>
          </ReadMore>
        </div>
      </div>
    </div>
  </>
)

export default News
