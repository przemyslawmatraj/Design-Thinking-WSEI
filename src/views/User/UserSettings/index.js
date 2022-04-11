import React from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'

const UserSettings = () => {
  const {
    auth: { data },
  } = useAuth()

  return (
    <Container>
      <div className={css.title}>
        <h1>Ustawienia Zespołu</h1>
        <h2>
          Zespół <strong>{data.username}</strong>
        </h2>
      </div>
      <div className={css.data}>
        <div className={css.column}>
          <h3>Dane zespołu</h3>
          <div>Nazwa zespołu: {data.username}</div>
          <div>Email: {data.email}</div>
          <div>Hasło: {data.password}</div>
          {data.members.map(({ name, surname, email, leader, school, phoneNumber }) => (
            <div key={email} className={css.person}>
              <div>Imię: {name}</div>
              <div>Nazwisko: {surname}</div>
              <div>Email: {email}</div>
              <div>Lider: {leader}</div>
              <div>Szkoła: {school}</div>
              <div>Telefon: {phoneNumber}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

UserSettings.propTypes = {}

export default UserSettings
