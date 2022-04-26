import React, { useRef, useEffect, useState } from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import axios from '../../utils/axios'

import { default as StepTwo } from '../../components/oragnisms/MemberForm'
import Message from '../Message'
import Container from '../../components/Layout/Container'

import doc1 from '../../assets/docs/regulamin_konkursu_WSEI_Ep.pdf'
import registerTop from '../../assets/graphics/registerTop.webp'

/* Regex */
const PASSWORD_LOWERCASE = /^(?=.*[a-z]).{0,}$/
const PASSWORD_UPPERCASE = /^(?=.*[A-Z]).{0,}$/
const PASSWORD_NUMBER = /^(?=.*[0-9]).{0,}$/
const PASSWORD_MIN_CHAR = /^.{8,}$/
const PASSWORD_ALL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
const USER_REGEX = /^[A-Z\s].{2,}$/
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const RegisterPage = () => {
  const userRef = useRef()
  const errRef = useRef()

  /* User State */
  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  /* Password State */
  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  /* Password Dots State */
  const [pwdDot1, setPwdDot1] = useState(false)
  const [pwdDot2, setPwdDot2] = useState(false)
  const [pwdDot3, setPwdDot3] = useState(false)
  const [pwdDot4, setPwdDot4] = useState(false)

  /* Password Match State */
  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  /* Email State */
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  /* Members State */
  const [members, setMembers] = useState([])
  const [validMembers, setValidMembers] = useState(true)
  const [membersCount, setMembersCount] = useState(0)
  /* Checkboxes State */
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  /* Submit State */
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  /*Loadings*/
  const [loading, setLoading] = useState(false)

  /* Response State */
  const [response, setResponse] = useState(null)

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus()
    }
  }, [])

  useEffect(() => {
    setMembersCount(members.length)
  }, [members])

  /* Form Validation */
  useEffect(() => {
    /* User Validation */
    const result = USER_REGEX.test(user)
    setValidName(result)
  }, [user])

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

  useEffect(() => {
    /* Email Validation */
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    /* Error Message */
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !USER_REGEX.test(user) ||
      !PASSWORD_ALL.test(pwd) ||
      matchPwd !== pwd ||
      !EMAIL_REGEX.test(email) ||
      !checked ||
      !checked2
    ) {
      setErrMsg('Wszystkie pola muszą być poprawnie wypełnione')
      goToTop()
      errRef.current.focus()
      return
    }
    if (members.length < 3) {
      setErrMsg('Musisz dodać przynajmniej 3 członków')
      goToTop()
      errRef.current.focus()
      return
    }
    setLoading(true)
    const membersFinal = members.map((member) => {
      return {
        name: member.name,
        surname: member.surname,
        email: member.email,
        school: member.school,
        phoneNumber: member.phoneNumber,
        isLeader: member.isLeader,
        address: {
          street: member.address.street,
          number: member.address.number,
          postal: member.address.postal,
          city: member.address.city,
        },
      }
    })

    const readyToSend = {
      username: user,
      password: pwd,
      email,
      members: membersFinal,
    }
    goToTop()
    await axios
      .post('/register', JSON.stringify(readyToSend), {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setResponse(res)
        setSuccess(true)
        setLoading(false)
      })
      .catch((err) => {
        setValidEmail(false)
        setLoading(false)
        setErrMsg(
          'Wystąpił błąd podczas rejestracji, prawdopodobnie podany email juz istnieje lub masz kłopot z połączeniem. Spróbuj ponownie lub skontaktuj się z administratorem.'
        )
        errRef.current.focus()
      })
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Container>
      {success ? (
        <div className={css.success}>
          {response?.status && success ? (
            <Message type="signUp" status={response?.status === 200 ? 'success' : 'error'} email={email} />
          ) : (
            <Message type="signUp" status={'error'} />
          )}
        </div>
      ) : (
        <>
          <div className={css.top}>
            <div className={css.title}>
              <h1>Elevator Pitch</h1>
              <h2>Formularz rejestracyjny Konkursu</h2>
            </div>
            <img className={css.imgTop} src={registerTop} alt="Grafika przedstawiająca forumlarz rejestracyjny" />
          </div>
          {loading && 'Ładownie...'}
          <div className={css.bottom}>
            <div className={css.asideColumn}></div>
            <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
              {errMsg && (
                <p ref={errRef} className={css.formError} aria-live="assertive">
                  {errMsg}
                </p>
              )}
              <div className={css.stepOne}>
                <h2 className={css.stepTitle}>Krok 1</h2>
                <h3 className={css.stepSubTitle}>Wprowadź podstawowe dane zespołu</h3>
                <div className={css.stepOneGroup}>
                  <label htmlFor="user" className={css.stepOneLabel}>
                    <span className={css.stepOneLabelText}>
                      Nazwa zespołu:
                      <span className={css.star}>*</span>
                    </span>

                    <input
                      type="text"
                      id="user"
                      placeholder='np. "Team Rocket"'
                      className={clsx({
                        [css.stepOneInput]: true,
                        [css.stepOneInputError]: !userFocus && user && !validName,
                        [css.stepOneInputFocus]: userFocus,
                        [css.stepOneInputSuccess]: validName,
                      })}
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                      required
                      aria-invalid={!validName}
                      aria-describedby="user-err"
                      ref={userRef}
                      autoComplete="nope"
                    />
                  </label>
                  {userFocus && user && !validName && (
                    <span id="user-err" className={css.stepOneError}>
                      Nazwa powinna rozpoczynać się od duzej litery oraz składać się z przynajmniej 4 znaków
                    </span>
                  )}
                </div>
                <div className={css.stepOneGroup}>
                  <label htmlFor="email" className={css.stepOneLabel}>
                    <span className={css.stepOneLabelText}>
                      Email:
                      <span className={css.star}>*</span>
                    </span>
                    <input
                      type="text"
                      id="email"
                      placeholder="Wpisz email"
                      className={clsx({
                        [css.stepOneInput]: true,
                        [css.stepOneInputError]: !emailFocus && email && !validEmail,
                        [css.stepOneInputFocus]: emailFocus,
                        [css.stepOneInputSuccess]: validEmail,
                      })}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      required
                      aria-invalid={!validEmail}
                      aria-describedby="email-err"
                      autoComplete="nope"
                    />
                  </label>
                  {emailFocus && email && !validEmail && (
                    <span id="email-err" className={css.stepOneError}>
                      Email jest niepoprawny
                    </span>
                  )}
                </div>
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
                      placeholder="Powtórz hasło"
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
              </div>
              <StepTwo
                members={members}
                setMembers={setMembers}
                setValidMembers={setValidMembers}
                validMembers={validMembers}
                success={success}
                membersCount={membersCount}
              />
              <h2 className={css.stepTitle}>Krok 3</h2>
              <h3 className={css.stepSubTitle}>Przeczytaj i zaakceptuj regulamin konkursu</h3>
              <div className={css.stepOneSubmit}>
                <label className={css.checkbox}>
                  <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
                  Akceptuje postanowienia <a href={doc1}>Regulaminu</a>
                  <span className={css.star}>*</span>
                </label>
                <label className={css.checkbox}>
                  <input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
                  Wyrazam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku
                  z rejestracją zespołu. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia prośby o
                  rejestrację zespołu. Zostatem poinformowany, Przysługuje mi prawo dostepu do swoich danych, możliwości
                  ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Wysza
                  Szkoła Ekonomii i Informatyki w Krakowie.
                  <span className={css.star}>*</span>
                </label>

                <button
                  type="submit"
                  className={css.stepOneButton}
                  disabled={
                    !validName || !validPwd || !validMatch || !validEmail || !validMembers || !checked || !checked2
                  }
                >
                  Zarejestruj zespół
                </button>
              </div>
            </form>
            <div className={css.asideColumn}></div>
          </div>
        </>
      )}
    </Container>
  )
}

export default RegisterPage
