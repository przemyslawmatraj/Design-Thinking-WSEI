import React, { useEffect, useState } from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import date from '../../../components/molecules/Spinner/date.js'
import img1 from '../../../assets/graphics/dashboard.svg'
import img2 from '../../../assets/graphics/yourIdeaNapkin.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import doc1 from '../../../assets/docs/zalacznik_formularz_zloszeniowy_Ep.pdf'

const UserDashboard = () => {
  const {
    auth: { data },
  } = useAuth()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      })
    }
    scrollToTop()
  }, [])

  const toggleModal = () => {
    setModal(!modal)
    console.log(modal)
  }

  return (
    <Container>
      <div
        className={clsx({
          [css.modal]: true,
          [css.show]: modal,
        })}
      >
        <div className={css.content}>
          <div onClick={toggleModal}>
            <FontAwesomeIcon icon={faTimes} color="#fff" />
          </div>
          <img src={img2} alt="your idea napkin" />
        </div>
      </div>
      <div className={css.title}>
        <h1>Panel Zespołu</h1>
        <h2>Zespół {data?.username}</h2>
        {/* {!data?.idea && (
          <p>
            Co teraz? Wzorując się na{' '}
            <span onClick={toggleModal} className={css.link}>
              Your Idea Napkin
            </span>{' '}
            zadaj sobie 5 pytań. Wypełni <a href={doc1}>ten dokument</a> i wyślij go za pomocą formularza, który
            znajduje się w zakładce WYŚLI POMYSŁ.
          </p>
        )} */}
        <p>
          W dniu <strong>10.06 od godz. 13:00 do 17:00</strong> odbędzie się BootCamp zdalnie na paltformie
          <strong>MS Teams</strong> według załączonego planu. Dostaną państwo dostęp do platformy mailowo w dniu
          BootCampa.
        </p>
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
          <h3>Ważne daty</h3>
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
