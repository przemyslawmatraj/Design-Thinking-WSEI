import React, { useState, useEffect, useRef } from 'react';
import css from './index.module.scss';

import logo from '../../../assets/graphics/elevatorPitch.svg';
import img1 from '../../../assets/photos/mainGoals.png';
import img2 from '../../../assets/photos/studentGoals.png';
import img3 from '../../../assets/photos/newSkills.png';
import clsx from 'clsx';
import useParallax from '../../../hooks/useParallax';
import Button from '../../atoms/Button';

const ElevatorPitch = () => {
  const path = useRef();
  let offsetY = useParallax();
  let [pathLength, setPathLength] = useState();
  let [pathOffset, setPathOffset] = useState();

  let [scrollPercentage, setScrollPercentage] = useState(0);
  let [drawPath, setDrawPath] = useState(0);
  useEffect(() => {
    if (path.current) {
      setPathLength(path.current.getTotalLength());
      setPathOffset(path.current.getBoundingClientRect());
      path.current.style.strokeDashoffset = pathLength - drawPath;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (path.current) {
      path.current.style.strokeDasharray = pathLength + ' ' + pathLength;

      setScrollPercentage(
        offsetY < pathOffset?.y + pathLength - window.innerHeight
          ? ((pathOffset?.y - 500 - offsetY) / (pathOffset?.y + pathLength - window.innerHeight * 1.5 - 1000)) * 1.3
          : -1
      );

      setDrawPath(pathLength * -1 * scrollPercentage);
      path.current.style.strokeDashoffset = pathLength - drawPath;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetY]);
  return (
    <>
      <div className={css.container} id="ep">
        <h4 className={css.sectionTitle}>Międzyuczelniany konkurs Elevator pitch | 2022</h4>
        <img loading="lazy" src={logo} alt="Elevator Pitch logo" className={css.logo} />
        <svg className={css.path} fill="none" preserveAspectRatio="xMidYMax meet" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.4996 0C26.4996 98.6667 26.4996 356.6 26.4996 365C26.4996 375.5 39.9996 376.5 41.9996 396.5C51.5996 396.5 64.833 396.5 65.9996 396.5L61.4996 400.5L63.9996 403.5H57.4996L54.9996 400.5H26.9996C32.1994 400.5 30.5 407.5 24.4996 407.5C18.8996 407.5 17.1663 402.833 16.9996 400.5C16.9996 398 18.4996 393 24.4996 393C24.4996 388.2 24.4996 382 24.4996 379.5C18.1663 380.167 5.49963 385.3 5.49963 400.5C5.49963 415.7 19.833 421.167 26.9996 422C29.6663 422 35.1996 421.1 35.9996 417.5C36.9996 413 32.4996 408.5 26.9996 411.5C21.4996 415.5 26.9996 444.667 26.9996 457.5L23.9996 1335.5C22.833 1335.67 20.2996 1335.7 19.4996 1334.5C18.4996 1333 18.4996 1324 18.4996 1321C18.5084 1323.5 22.9996 1321 22.9996 1317.5C22.9996 1320.5 29.4996 1323.5 29.4996 1321.5C29.4996 1319.9 28.4996 1333.83 27.9996 1341C25.333 1341.67 18.8996 1342.3 14.4996 1339.5C16.4996 1333.5 3.49963 1326 6.99963 1315C8.33296 1310.5 13.3996 1301.4 22.9996 1301C28.4373 1300.77 32.8483 1303.01 36 1306.18C39.8036 1310 41.7731 1315.17 41.4996 1319C40.9996 1326 36.9996 1330 34.4996 1334C33.4996 1338.5 33.9996 1343.5 33.4996 1345C32.9996 1346.5 16.9996 1348.5 14.9996 1346C14.9996 1350 14.9996 1351.67 14.9996 1352C19.6663 1352.67 29.8996 1353.5 33.4996 1351.5C33.4996 1354 34.4996 1358.5 23.9996 1358.5C23.9996 1361.3 23.9996 1369.33 23.9996 1373L26 2321.5C19.3333 2324.83 5.39997 2331.9 2.99997 2333.5C0.599969 2335.1 1.99997 2336.5 2.99997 2337C3.99996 2337 6.19994 2336.7 6.99994 2335.5C10.4999 2334 24 2326 26 2326.5C27.9999 2327 44.4999 2335 45.4999 2336C46.4999 2337 47.4999 2338.5 46.4999 2339C45.4999 2339.5 28.9999 2347.5 27.4999 2347.5C26 2347.5 26.9999 2348.5 23.9999 2347.5C20.9999 2346.5 16.9999 2343 14.9999 2343C12.9999 2343 11.4999 2344.5 11.4999 2346.5C11.4999 2348.1 11.4999 2354.83 11.4999 2358C11.9999 2359 13.8999 2361.3 17.4999 2362.5C21.0999 2363.7 24.6666 2364 26 2364C29.1666 2363.5 35.8999 2362.2 37.4999 2361C39.4999 2359.5 40.4999 2358 40.4999 2357C40.4999 2356 40.4999 2341 40.4999 2340C40.4999 2339 15.9999 2337 5.99994 2341C3.49994 2343 4.99994 2349 4.99994 2355C12.6666 2369 26 2372.5 26 2421C26 2469.5 26 2493 26 2516.5C26 2516.5 26.4034 3304 26.5 3315.25C26.5965 3326.5 8.42363 3331.5 8.46181 3347C8.5 3362.5 43.4606 3358 43.5 3376.5C43.5394 3395 8.53819 3391.5 8.5 3408C8.46181 3424.5 43.5 3424.5 43.5394 3439.5C43.5789 3454.5 26.5 3456 26.5965 3469.5C26.6931 3483 27 4160.5 27 4160.5C27 4187.5 48.9999 4174 48.9999 4176C48.9999 4190.16 52.9999 4204.5 31.9999 4215C23.9999 4215 19.6666 4215 15.9999 4215V4220.5H12.9999V4223.5H40.9999V4220.5H33.4999C32.4999 4215.83 30.9999 4205.5 30.9999 4205.5C30.9999 4205.5 35.9999 4203 35.9999 4199.5C41.1999 4199.5 42.4999 4196.17 42.4999 4194.5V4184.5H11.4999V4194C11.8333 4195.67 13.5999 4199 17.9999 4199C17.9999 4202.6 21.3333 4204.83 22.9999 4205.5C22.3333 4212.67 20.9999 4224 19.9999 4230.5C18.9999 4237 18.4999 4241.5 19.9999 4248C21.4999 4254.5 26.9999 4263.6 26.9999 4268V4321V4844.5H12L17 4853H40.5L37 4861H20L25 4869.5H33.5L29 4876V4880"
            stroke="#f19106"
            strokeWidth="1.5"
            ref={path}
          />
        </svg>
        <div className={css.steps}>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>1. Cel główny wydarzenia</h2>
              <div className={css.description}>
                <p>
                  Rozwój i doskonalenie współpracy między wybranymi kołami naukowymi studentów zarządzania projektami w Polsce. Aktywizacja projektowa
                  studentów WSEI w czasie realizacji rzeczywistego wydarzenia z wykorzystaniem wybranych narzędzi metody Design Thinking. Promocja Kół
                  Naukowych Zarządzania Projektami.
                </p>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img1} alt="Cel wydarzenia" className={css.image_1} />
              <p className={css.textAbove}>
                Jak przekonać inwestorów do swojego biznesu? Business Model Canvas i Elevator pitch jako elementy dialogu nauki z biznesem
              </p>
            </div>
          </div>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>2. Cele uczestników:</h2>
              <div className={css.description}>
                <p>
                  Studenci potrzebują (międzyuczelnianego) wydarzenia, które pozwoli im zaprezentować (przetestować) swoje pomysły (nowe produkty lub
                  usługi) na forum publicznym w kontakcie z biznesem. Dlatego uczestnicząc w konkursie Ep w WSEI:
                </p>
                <p>
                  − <strong>poprawisz</strong> swoje umiejętności prezentacji;
                </p>
                <p>
                  − zwiększysz swoją <strong>pewność siebie</strong> – twórczą odwagę;
                </p>
                <p>
                  − weźmiesz udział w praktycznych warsztatach i spotkaniach oraz <strong>poczujesz wsparcie</strong> grupy w czasie pracy zespołowej;{' '}
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
                  Na warsztatach projektowania trenerzy DT będą uczyć uczestników, jak w kilkadziesiąt sekund, w sposób zwięzły i rzeczowy przekonać
                  inwestora do swojego pomysłu.
                </p>
                <p>
                  Studenci dowiedzą się, o czym należy mówić, a jakie treści lepiej pominąć, a przede wszystkim poznają tajniki skutecznej,
                  wiarygodnej i przykuwającej uwagę narracji biznesowej.
                </p>
                <p>
                  W czasie warsztatów wyłonione zespoły przygotują też koncepcję Business Model Canvas, która będzie stanowiła podstawę do opracowania
                  autorskiego Ep.
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
                  W czasie trwania konkursu zespoły przygotują i przedstawią Elevator pitch, stanowiący model komunikacji w postaci samodzielnej
                  krótkiej wypowiedzi, bądź głosu wspartego prezentacją multimedialną.
                </p>

                <p>
                  Celem jest skuteczne przedstawienie posiadanej oferty (pomysłu na start-up) potencjalnym inwestorom bądź partnerom przedsięwzięcia –
                  jury konkursowemu - przedsiębiorcom.
                </p>
              </div>
            </div>
            <div className={clsx(css.right, css.reverseRight)}>
              <img loading="lazy" src={img2} alt="Cele studenta" className={css.image_1} />
            </div>
          </div>
          <div className={css.step}>
            <div className={css.left}>
              <h2 className={css.title}>4. Atrakcyjne nagrody</h2>
              <div className={css.description}>
                <h4>I miejsce, II miejsce, III miejsce</h4>
                <p>Wartościowe nagrody rzeczowe!</p>
                <h4>Upominki</h4>
                <p>dla pozostałych uczestników – zakwalifikowanych do udziału w konkursie. </p>
              </div>
            </div>
            <div className={css.right}>
              <img loading="lazy" src={img3} alt="Cele studenta" className={css.image_1} />
            </div>
            <Button className={css.button} v="variant2" color="white">
              Zapisz się teraz!
            </Button>
            <div className={css.learnMore}>
              lub <a href="#">Dowiedz się więcej...</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ElevatorPitch;
