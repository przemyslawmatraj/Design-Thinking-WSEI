import React, { useRef, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import css from './index.module.scss'
import axios from '../../utils/axios'
import useAuth from '../../hooks/useAuth'
import loginTop from '../../assets/graphics/loginTop.webp'
import Container from '../../components/Layout/Container'

import Token from '../../utils/token'

const LoginPage = () => {
  const { setAuth } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const emailRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  useEffect(() => {
    setError('')
  }, [email, password])

  const checkRole = (role, data) => {
    if (data?.roles?.some(({ role: r }) => r === role)) {
      if (data.roles.some(({ role: r }) => r === 'TEST')) {
        return '/user/dashboard'
      }
      return `/${role.toLowerCase()}/dashboard`
    }
    return false
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setError('Wypełnij wszystkie pola!')
      return
    }
    await axios
      .post('/login', JSON.stringify({ username: email, password: password }), {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.error) {
          setError('Błędny login lub hasło!')
        } else {
          Token.add(res.data.token)
          return res.data.token
        }
      })
      .catch((err) => {
        if (!err.response) {
          setError('Błąd połączenia z serwerem!')
        } else if (err.response.status === 401 || err.response.status === 400) {
          setError('Błędny login lub hasło!')
        } else {
          setError('Nie udało się zalogować! Spróbuj ponownie później lub skontaktuj się z administratorem.')
        }
        errRef.current.focus()
      })
      .then(async (authtoken) => {
        if (authtoken !== undefined) {
          await axios
            .get('/getUserData', {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authtoken}`,
              },
              withCredentials: true,
            })
            .then((res) => {
              setAuth({ data: res.data, accessToken: authtoken })
              goToTop()
              navigate(
                location.state?.from ||
                  checkRole('ADMIN', res.data) ||
                  checkRole('USER', res.data) ||
                  checkRole('TEST', res.data),
                {
                  replace: true,
                }
              )
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
  }

  return (
    <Container>
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
                    [css.stepOneInputSuccess]: !!email,
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
                    [css.stepOneInputSuccess]: !!password,
                  })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit" className={css.stepOneButton}>
              Zaloguj się
            </button>
          </div>
        </form>
        <div className={css.asideColumn}></div>
      </div>
    </Container>
  )
}

export default LoginPage
