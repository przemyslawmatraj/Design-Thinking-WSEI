import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'

import img1 from '../../../assets/graphics/yourIdeaNapkin.jpeg'

const UserIdea = () => {
  const {
    auth: { data },
  } = useAuth()

  return (
    <Container>
      <div className={css.title}>
        <h1>Nasz pomysł</h1>
        <h2>
          Zespół <strong>{data.username}</strong>
        </h2>
      </div>
      <div className={css.idea}>
        <div className={css.column}>
          <h3>Załącz potrzebne pliki</h3>
          <form>
            <div className={css.file}>
              <label htmlFor="file">
                <span>Plik z prezentacją</span>
                <br />
                <input type="file" id="file" />
              </label>
            </div>
            <div className={css.file}>
              <label htmlFor="file">
                <span>Plik ze zgłoszeniem</span>
                <br />
                <input type="file" id="file" />
              </label>
            </div>
          </form>
        </div>
        <div className={css.column}>
          <img src={img1} alt="" />
        </div>
      </div>
    </Container>
  )
}

UserIdea.propTypes = {}

export default UserIdea
