import React from 'react'
import css from './index.module.scss'

import Baner from '../../components/oragnisms/Baner'
import Team from '../../components/oragnisms/Team'
import About from '../../components/oragnisms/About'
import News from '../../components/oragnisms/News'
import Partners from '../../components/oragnisms/Partners'
import Cover from '../../components/atoms/Cover'
import Container from '../../components/Layout/Container'
import ElevatorPitch from '../../components/oragnisms/ElevatorPitch'

const LandingPage = () => {
  return (
    <>
      <Container>
        <Baner className={css.baner} />
      </Container>
      <Cover delay={0}>
        <Container overflow={false}>
          <ElevatorPitch />
        </Container>
      </Cover>
      <Container overflow={false}>
        <About className={css.about} />
      </Container>
      <Team />
      <Container>
        <News />
      </Container>
      <Partners />
    </>
  )
}

export default LandingPage
