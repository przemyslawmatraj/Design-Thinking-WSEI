import React from 'react'
import { Link } from 'react-router-dom'

import css from './index.module.scss'
import logo from '../../../assets/graphics/elevatorPitch.svg'
import img1 from '../../../assets/photos/mainGoals.webp'
import img2 from '../../../assets/photos/studentGoals.webp'
import img3 from '../../../assets/photos/newSkills.webp'
import img4 from '../../../assets/photos/elevatorPith.webp'
import clsx from 'clsx'
import regulations from '../../../assets/docs/regulamin_konkursu_WSEI_Ep.pdf'
import Path from '../../atoms/Path/Path'

const ElevatorPitch = () => {
  return (
    <>
      <div className={css.container} id="ep">
        <h4 className={css.sectionTitle}>Międzyuczelniany konkurs Elevator pitch | 2022</h4>
        <img loading="lazy" src={logo} alt="Elevator Pitch logo" className={css.logo} />
        <Path />
        <div className={css.steps}>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>1. Cel główny wydarzenia</h2>
              <div className={css.description}>
                <p>
                  Rozwój i doskonalenie współpracy między wybranymi kołami naukowymi studentów zarządzania projektami w
                  Polsce. Aktywizacja projektowa studentów WSEI w czasie realizacji rzeczywistego wydarzenia z
                  wykorzystaniem wybranych narzędzi metody Design Thinking. Promocja Kół Naukowych Zarządzania
                  Projektami.
                </p>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img1} alt="Cel wydarzenia" className={css.image_1} />
              <p className={css.textAbove}>
                Jak przekonać inwestorów do swojego biznesu? Business Model Canvas i Elevator pitch jako elementy
                dialogu nauki z biznesem
              </p>
            </div>
          </div>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>2. Cele uczestników:</h2>
              <div className={css.description}>
                <p>
                  Studenci potrzebują (międzyuczelnianego) wydarzenia, które pozwoli im zaprezentować (przetestować)
                  swoje pomysły (nowe produkty lub usługi) na forum publicznym w kontakcie z biznesem. Dlatego
                  uczestnicząc w konkursie Ep w WSEI:
                </p>
                <p>
                  − <strong>poprawisz</strong> swoje umiejętności prezentacji;
                </p>
                <p>
                  − zwiększysz swoją <strong>pewność siebie</strong> – twórczą odwagę;
                </p>
                <p>
                  − weźmiesz udział w praktycznych warsztatach i spotkaniach oraz <strong>poczujesz wsparcie</strong>{' '}
                  grupy w czasie pracy zespołowej;{' '}
                </p>
                <p>
                  − poznasz nowe narzędzia wspierające <strong>komunikację</strong>;
                </p>
                <p>− nauczysz się zasad zdrowej rywalizacji w życzliwym otoczeniu.</p>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img2} alt="Cele studenta" className={css.image_1} />
            </div>
          </div>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>3. Nowe kompetencje studentów</h2>
              <div className={css.description}>
                <h4>Bootcamp</h4>
                <p>
                  Na warsztatach projektowania trenerzy DT będą uczyć uczestników, jak w kilkadziesiąt sekund, w sposób
                  zwięzły i rzeczowy przekonać inwestora do swojego pomysłu.
                </p>
                <p>
                  Studenci dowiedzą się, o czym należy mówić, a jakie treści lepiej pominąć, a przede wszystkim poznają
                  tajniki skutecznej, wiarygodnej i przykuwającej uwagę narracji biznesowej.
                </p>
                <p>
                  W czasie warsztatów wyłonione zespoły przygotują też koncepcję Business Model Canvas, która będzie
                  stanowiła podstawę do opracowania autorskiego Ep.
                </p>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img3} alt="Cele studenta" className={css.image_1} />
            </div>
          </div>
          <div className={css.step}>
            <div className={clsx(css.left, css.reverseLeft)}>
              <div className={css.description}>
                <h4>Konkurs Elevator pitch. </h4>

                <p>
                  W czasie trwania konkursu zespoły przygotują i przedstawią Elevator pitch, stanowiący model
                  komunikacji w postaci samodzielnej krótkiej wypowiedzi, bądź głosu wspartego prezentacją
                  multimedialną.
                </p>

                <p>
                  Celem jest skuteczne przedstawienie posiadanej oferty (pomysłu na start-up) potencjalnym inwestorom
                  bądź partnerom przedsięwzięcia – jury konkursowemu - przedsiębiorcom.
                </p>
              </div>
            </div>
            <div className={clsx(css.right, css.reverseRight)}>
              <img loading="lazy" src={img4} alt="Cele studenta" className={css.image_1} />
            </div>
          </div>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>4. Atrakcyjne nagrody</h2>
              <div className={clsx(css.description, css.prize)}>
                <div className={css.label}>
                  <h4>I miejsce</h4>
                  <p>Nagrody o wartości 1000 zł</p>
                </div>
                <div className={css.label}>
                  <h4>II miejsce</h4>
                  <p>Nagrody o wartości 600 zł</p>
                </div>
                <div className={css.label}>
                  <h4>III miejsce</h4>
                  <p>Nagrody o wartości 500 zł</p>
                </div>
                <div className={css.label}>
                  <h4>Upominki</h4>
                  <p>Dla pozostałych uczestników – zakwalifikowanych do udziału w konkursie. </p>
                </div>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img3} alt="Cele studenta" className={css.image_1} />
            </div>
            <Link className={css.button} to="/register">
              Zapisz się teraz!
            </Link>
            <div className={css.learnMore}>
              lub <a href={regulations}>Dowiedz się więcej...</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ElevatorPitch
