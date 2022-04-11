import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../Container'
import FullWidthContainer from '../FullWidthContainer'
import Header from '../../oragnisms/Header'
import Footer from '../../oragnisms/Footer'
import Contact from '../../oragnisms/Contact'

const MainLayout = () => {
  return (
    <>
      <Container>
        <Header />
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

export default MainLayout
