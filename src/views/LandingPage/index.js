import React, { useEffect } from 'react'
import css from './index.module.scss'
import PropTypes from 'prop-types'
import Baner from '../../components/oragnisms/Baner'
import Team from '../../components/oragnisms/Team'
import About from '../../components/oragnisms/About'
import News from '../../components/oragnisms/News'
import ElevatorPitch from '../../components/oragnisms/ElevatorPitch'
import Partners from '../../components/oragnisms/Partners'
import Cover from '../../components/atoms/Cover'
import Container from '../../components/Layout/Container'

const LandingPage = ({ setNavVariant }) => {
  useEffect(() => {
    setNavVariant('anchor')
  }, [setNavVariant])

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
        <About className={css.about} />
        <Team />
        <News />
        <Partners />
      </Container>
    </>
  )
}

LandingPage.propTypes = {
  setNavVariant: PropTypes.func,
}

export default LandingPage
