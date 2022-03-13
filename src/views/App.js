import React from 'react';
import css from './App.module.scss';

import Header from '../components/oragnisms/Header';
import Baner from '../components/oragnisms/Baner';
import Team from '../components/oragnisms/Team';
import About from '../components/oragnisms/About';
import News from '../components/oragnisms/News';
import ElevatorPitch from '../components/oragnisms/ElevatorPitch';
import Partners from '../components/oragnisms/Partners';
import Contact from '../components/oragnisms/Contact';
import Cover from '../components/atoms/Cover';
import Container from '../components/atoms/Container';
import Footer from '../components/oragnisms/Footer';
import FullWidthContainer from '../components/atoms/FullWidthContainer';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Baner className={css.baner} />
      </Container>
      <Cover delay={300}>
        <Container overflow={false}>
          <ElevatorPitch />
        </Container>
      </Cover>
      <Container overflow={false}>
        <About className={css.about} />
        <Team />
        <News />
        <Partners />
      </Container>
      <FullWidthContainer bgColor="gray">
        <Contact />
      </FullWidthContainer>
      <FullWidthContainer bgColor="darkgray">
        <Footer />
      </FullWidthContainer>
    </>
  );
}

export default App;
