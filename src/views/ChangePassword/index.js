import React, { useEffect, useState, useRef } from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import useAuth from '../../hooks/useAuth'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Container from '../../components/Layout/Container'
import axios from '../../utils/axios'
import Message from '../Message'
const PASSWORD_LOWERCASE = /^(?=.*[a-z]).{0,}$/
const PASSWORD_UPPERCASE = /^(?=.*[A-Z]).{0,}$/
const PASSWORD_NUMBER = /^(?=.*[0-9]).{0,}$/
const PASSWORD_MIN_CHAR = /^.{8,}$/

const ChangePassword = () => {
  const { auth } = useAuth()

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  /* New Password State */
  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  /* New Password Dots State */
  const [pwdDot1, setPwdDot1] = useState(false)
  const [pwdDot2, setPwdDot2] = useState(false)
  const [pwdDot3, setPwdDot3] = useState(false)
  const [pwdDot4, setPwdDot4] = useState(false)

  /* New Password Match State */
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const pwdRef = useRef()

  useEffect(() => {
    if (pwdRef.current) {
      pwdRef.current.focus()
    }
  }, [])

  useEffect(() => {
    /* Pwd Validation */
    const result = PASSWORD_MIN_CHAR.test(pwd)
    const result2 = PASSWORD_LOWERCASE.test(pwd)
    const result3 = PASSWORD_NUMBER.test(pwd)
    const result4 = PASSWORD_UPPERCASE.test(pwd)
    setValidPwd(result && result2 && result3 && result4)

    /* Pwd Dots */
    setPwdDot1(result)
    setPwdDot2(result2)
    setPwdDot3(result3)
    setPwdDot4(result4)

    /* Pwd Match Valiadtion */
    const result5 = pwd === matchPwd
    setValidMatch(result5)
  }, [pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validPwd || !validMatch) {
      return
    }
    setLoading(true)
    await axios
      .post(
        `/changePassword`,
        {
          password: pwd,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )
      .then((res) => {
        setLoading(false)
        setSuccess(true)
        console.log(res)
      })
      .catch((err) => {
        setLoading(false)
        setError(err.response.data.message)
        console.log(err)
      })
  }

  return (
    <Container>
      {success && <Message type="changePassword" status="success" />}
      {error && <Message type="changePassword" status="error" />}

      <div className={css.changePassword}>
        <h1>Zmiana hasła</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          {loading && <div className={css.loading}>Loading...</div>}
          <div className={css.stepOneGroup}>
            <label htmlFor="pwd" className={css.stepOneLabel}>
              <span className={css.stepOneLabelText}>
                Hasło:<span className={css.star}>*</span>
              </span>
              <input
                type="password"
                id="pwd"
                placeholder="Wpisz hasło"
                className={clsx({
                  [css.stepOneInput]: true,
                  [css.stepOneInputError]: !pwdFocus && pwd && !validPwd,
                  [css.stepOneInputFocus]: pwdFocus,
                  [css.stepOneInputSuccess]: validPwd,
                })}
                ref={pwdRef}
                value={pwd}
                onChange={(e) => setPwd(e.target.value.trim())}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                aria-invalid={!validPwd}
                aria-describedby="pwd-err"
                autoComplete="nope"
                required
              />
            </label>
            {pwdFocus && pwd && !validPwd && (
              <span id="pwd-err" className={css.stepOneError}>
                Wprowadź poprawne hasło
              </span>
            )}
            <div className={css.stepOnePwdDots}>
              <span
                className={clsx({
                  [css.gray]: !pwdDot1,
                  [css.green]: pwdDot1,
                })}
              >
                <FontAwesomeIcon icon={faCircle} />
                Przynajmniej 8 znaków
              </span>
              <span
                className={clsx({
                  [css.gray]: !pwdDot2,
                  [css.green]: pwdDot2,
                })}
              >
                <FontAwesomeIcon icon={faCircle} />
                Przynajmniej 1 mała litera
              </span>
              <span
                className={clsx({
                  [css.gray]: !pwdDot4,
                  [css.green]: pwdDot4,
                })}
              >
                <FontAwesomeIcon icon={faCircle} />
                Przynajmniej 1 duza litera
              </span>
              <span
                className={clsx({
                  [css.gray]: !pwdDot3,
                  [css.green]: pwdDot3,
                })}
              >
                <FontAwesomeIcon icon={faCircle} />
                Przynajmniej 1 liczba
              </span>
            </div>
          </div>
          <div className={css.stepOneGroup}>
            <label htmlFor="match" className={css.stepOneLabel}>
              <span className={css.stepOneLabelText}>
                Powtórz hasło:
                <span className={css.star}>*</span>
              </span>
              <input
                type="password"
                id="match"
                className={clsx({
                  [css.stepOneInput]: true,
                  [css.stepOneInputError]: !matchFocus && matchPwd && !validMatch,
                  [css.stepOneInputFocus]: matchFocus,
                  [css.stepOneInputSuccess]: matchPwd && validMatch,
                })}
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value.trim())}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                aria-invalid={!validMatch}
                aria-describedby="pwdmatch-err"
                autoComplete="nope"
                required
              />
            </label>
            {matchFocus && matchPwd && !validMatch && (
              <span id="pwdmatch-err" className={css.stepOneError}>
                Hasła nie są identyczne
              </span>
            )}
          </div>
          <div className={css.stepOneSubmit}>
            <button type="submit" className={css.stepOneButton} disabled={!validMatch || !validPwd}>
              Zatwierdź zmiany
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default ChangePassword
