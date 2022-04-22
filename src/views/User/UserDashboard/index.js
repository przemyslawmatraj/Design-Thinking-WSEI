import React, { useEffect } from 'react'
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import date from '../../../components/molecules/Spinner/date.js'
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
            Celem Elevator Pitch jest opisanie sytuacji lub rozwiązania tak fascynującego, że osoba, z którą rozmawiasz,
            będzie chciała usłyszeć więcej nawet po zakończeniu jazdy windą.
          </p>
          <p>
            ~Seth Godin, <i>co to jest Elevator Pitch?</i>
          </p>
        </div>
        <div>
          <h3>Wazne daty</h3>
          <ul>
            {date.map((item) => (
              <li key={item.id}>
                <p>
                  {item.date} - {item.title}
                </p>
                <p></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default UserDashboard
