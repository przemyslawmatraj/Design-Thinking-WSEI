import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

import Container from '../Container'
import FullWidthContainer from '../FullWidthContainer'
import Header from '../../oragnisms/Header'
import Footer from '../../oragnisms/Footer'
import Contact from '../../oragnisms/Contact'

const MainLayout = ({ navVariant }) => {
  return (
    <>
      <Container>
        <Header navVariant={navVariant} />
      </Container>
      <Outlet />
      <FullWidthContainer bgColor="gray">
        <Contact />
      </FullWidthContainer>
      <FullWidthContainer bgColor="darkgray">
        <Footer />
      </FullWidthContainer>
    </>
  )
}

MainLayout.propTypes = {
  navVariant: PropTypes.string,
}

export default MainLayout
