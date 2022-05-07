import React from 'react'
import css from './index.module.scss'
import { Outlet } from 'react-router-dom'
import FullWidthContainer from '../FullWidthContainer'
import Header from '../../oragnisms/Header'
import Footer from '../../oragnisms/Footer'
import Contact from '../../oragnisms/Contact'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={css.main} id="main">
        <Outlet />
      </main>
      <FullWidthContainer bgColor="gray">
        <Contact />
      </FullWidthContainer>
      <FullWidthContainer bgColor="gray">
        <Footer />
      </FullWidthContainer>
    </>
  )
}

export default MainLayout
