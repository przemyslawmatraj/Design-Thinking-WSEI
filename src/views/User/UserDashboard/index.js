import React, { useEffect } from 'react'
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'

import img1 from '../../../assets/graphics/dashboard.svg'

const UserDashboard = () => {
  const {
    auth: { data },
  } = useAuth()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      })
    }
    scrollToTop()
  }, [])
  return (
    <Container>
      <div className={css.title}>
        <h1>Panel Zespołu</h1>
        <h2>Zespół {data?.username}</h2>
        <img src={img1} alt="dashboard" />
      </div>

      <div className={css.panel}>
        <div>
          <h3>Aktualności</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod,
            nisi erat euismod diam, eget porttitor nisl nisi sed nisl.
          </p>
        </div>
        <div>
          <h3>Pomysł</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur euismod,
            nisi erat euismod diam, eget porttitor nisl nisi sed nisl.
          </p>
        </div>
        <div>
          <h3>Zadania</h3>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur</p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Wazne daty</h3>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur</p>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default UserDashboard
