import React, { useState } from 'react'
import css from './index.module.scss'
import logo from '../../../assets/logo/bigLogo.svg'
import Burger from '../../atoms/Burger'
import Navbar from '../../molecules/Navbar'
import Container from '../../Layout/Container'
const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleBurger = () => {
    window.innerWidth < 1200 && setOpen(!isOpen)
  }

  return (
    <Container>
      <header className={css.container}>
        <a href="https://wsei.edu.pl/dla-studentow/kola-naukowe/">
          <img aria-label="wróć do strony głównej WSEI" loading="lazy" src={logo} className={css.logo} alt="logo" />
        </a>
        <Burger isOpen={isOpen} toggle={toggleBurger} />
        <Navbar toggle={toggleBurger} />
      </header>
    </Container>
  )
}

export default Header
