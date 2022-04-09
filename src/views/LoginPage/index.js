import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import PropTypes from 'prop-types';
import clsx from 'clsx'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import axios from '../../utils/axios'
import useAuth from '../../hooks/useAuth'

import loginTop from '../../assets/graphics/loginTop.svg'
import Container from '../../components/Layout/Container'
const LoginPage = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const emailRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  useEffect(() => {
    setError('')
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setError('Wypełnij wszystkie pola!')
      return
    }
    axios
      .post('/login', JSON.stringify({ username: email, password }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res)
        // if (res.data.error) {
        //   setError('Błędny login lub hasło!')
        // } else {
        //   localStorage.setItem('token', res.data.token)
        //   setToken(res.data.token)
        //   console.log(localStorage.getItem('token'))
        // }
      })
      .catch((err) => {
        // err.response.data.status === 401
        //   ? setError('Błędny login lub hasło!')
        //   : setError('Wystąpił błąd podczas logowania. Spróbuj ponownie później.')
        console.log(err.response.data)
      })
    setAuth()
    // navigate('/dashboard')
  }

  return (
    <Container>
      <>
        <div className={css.top}>
          <div className={css.title}>
            <h1>Elevator Pitch</h1>
            <h2>Logowanie do panelu</h2>
          </div>
          <img className={css.imgTop} src={loginTop} alt="ludzie wypełniający dokumenty" />
        </div>
        <div className={css.bottom}>
          <div className={css.asideColumn}></div>
          <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.stepOne}>
              <h2 className={css.stepTitle}>Logowanie</h2>
              <h3 className={css.stepSubTitle}>
                Zaloguj się do platformy konkursu EP używając emaila zespołu oraz hasła:
              </h3>
              {error && (
                <p ref={errRef} className={css.formError} aria-live="assertive">
                  {error}
                </p>
              )}
              <div className={css.stepOneGroup}>
                <label htmlFor="email" className={css.stepOneLabel}>
                  <span className={css.stepOneLabelText}>Email zespołu:</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email zespołu"
                    className={clsx({
                      [css.stepOneInput]: true,
                      [css.stepOneInputError]: !!error,
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    ref={emailRef}
                  />
                </label>
              </div>
              <div className={css.stepOneGroup}>
                <label htmlFor="password" className={css.stepOneLabel}>
                  <span className={css.stepOneLabelText}>Hasło:</span>
                  <input
                    type="password"
                    id="password"
                    placeholder="Hasło:"
                    className={clsx({
                      [css.stepOneInput]: true,
                      [css.stepOneInputError]: !!error,
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button type="submit" className={css.stepOneButton} disabled={email === '' || password === ''}>
                Zaloguj się
              </button>
            </div>
          </form>
          <div className={css.asideColumn}></div>
        </div>
      </>
    </Container>
  )
}

LoginPage.propTypes = {}

export default LoginPage
