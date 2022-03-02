import React, { useRef, useEffect, useState } from 'react';
import css from './App.module.scss';

import Header from '../components/oragnisms/Header';
import Baner from '../components/oragnisms/Baner';
import Team from '../components/oragnisms/Team';
import About from '../components/oragnisms/About';
import News from '../components/oragnisms/News';
import Container from '../components/atoms/Container';

import Parallax from '../hooks/parallax';

function App() {
  const ref = useRef();
  const [divOffset, setDivOffset] = useState(null);
  let offsetY = Parallax();
  useEffect(() => {
    if (ref.current) {
      setDivOffset(ref.current.getBoundingClientRect());
    }
  }, []);

  const delay = 100;
  return (
    <>
      <Container>
        <Header />
        <Baner className={css.baner} />
        <About />
      </Container>
      <Container overflow={false}>
        <News />
      </Container>
      <div className={css.overlaySection} ref={ref}>
        <div className={css.overlay}>
          <div
            className={css.overlay}
            style={{
              transform: `scale(${
                divOffset?.y < offsetY - delay && offsetY < divOffset?.y + divOffset?.height
                  ? 1 + ((offsetY - delay - divOffset?.y) / divOffset?.height) * 200
                  : offsetY > divOffset?.y + divOffset?.height
                  ? 200
                  : 1
              })`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              width="100%"
              viewBox="0 0 4519 3213"
              preserveAspectRatio="xMidYMid slice"
              className={css.plus}
            >
              <path
                fill="#85BD4B"
                d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <Container overflow={false}>
          <Team />
        </Container>
      </div>
      <Container>
        <News />
      </Container>
    </>
  );
}

export default App;
