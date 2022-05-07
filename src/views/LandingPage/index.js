import React from 'react'
import css from './index.module.scss'

import Baner from '../../components/oragnisms/Baner'
import Team from '../../components/oragnisms/Team'
import About from '../../components/oragnisms/About'
import News from '../../components/oragnisms/News'
import ElevatorPitch from '../../components/oragnisms/ElevatorPitch'
import Partners from '../../components/oragnisms/Partners'
import Cover from '../../components/atoms/Cover'
import Container from '../../components/Layout/Container'
import Spinner from '../../components/molecules/Spinner'

const LandingPage = () => {
  return (
    <>
      <Container>
        <Baner className={css.baner} />
      </Container>
      <Cover delay={150}>
        <Container overflow={false}>
          <ElevatorPitch />
        </Container>
      </Cover>
      <Container overflow={false}>
        <h1 className={css.textCenter}>Wazne daty:</h1>
        <Spinner />
        <About className={css.about} />
        <Team />
        <News />
        <Partners />
      </Container>
    </>
  )
}

export default LandingPage
