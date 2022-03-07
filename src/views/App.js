import React from 'react';
import css from './App.module.scss';

import Header from '../components/oragnisms/Header';
import Baner from '../components/oragnisms/Baner';
import Team from '../components/oragnisms/Team';
import About from '../components/oragnisms/About';
import News from '../components/oragnisms/News';
import Container from '../components/atoms/Container';
import Cover from '../components/atoms/Cover';

function App() {
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
      <Cover delay={150}>
        <Container overflow={false}>
          <Team />
        </Container>
      </Cover>
      <Container>
        <News />
      </Container>
    </>
  );
}

export default App;
