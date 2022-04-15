import React, { useEffect, useState, useRef } from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import axios from '../../../utils/axios'
import clsx from 'clsx'
import { default as StepTwo } from '../../../components/oragnisms/MemberForm'
import { useNavigate, Link } from 'react-router-dom'
const USER_REGEX = /^[A-Z\s].{2,}$/
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const UserSettings = () => {
  const {
    auth: { data },
  } = useAuth()

  const navigate = useNavigate()

  const userRef = useRef()
  const errRef = useRef()

  /* User State */
  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  /* Email State */
  const [email, setEmail] = useState('')

  /* Members State */
  const [members, setMembers] = useState([])
  const [validMembers, setValidMembers] = useState(true)
  const [membersCount, setMembersCount] = useState(0)
  /* Checkbox State */

  /* Submit State */
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  /*Loadings*/
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus()
    }
    const fetchData = () => {
      const newMembers = data.members.map((member) => {
        return {
          ...member,
          errors: {
            name: null,
            surname: null,
            email: null,
            school: null,
            phoneNumber: null,
            street: null,
            number: null,
            postal: null,
            city: null,
          },
        }
      })
      setUser(data.username)
      setEmail(data.email)
      setMembers(newMembers)
      setMembersCount(data.members.length)
    }
    fetchData()
  }, [data.email, data.members, data.username])

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
    /* Error Message */
    setErrMsg('')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!USER_REGEX.test(user) || !EMAIL_REGEX.test(email)) {
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
      email,
      password: data.password,
      members: membersFinal,
    }

    await axios
      .patch('/editUserData', JSON.stringify(readyToSend), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        setSuccess(true)
        setLoading(false)
        window.location.reload(false)
      })
      .catch((err) => {
        setLoading(false)
        setErrMsg('Wystąpił błąd podczas zmiany danych. Spróbuj ponownie lub skontaktuj się z administratorem.')
        errRef.current.focus()
      })
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handdleDeleteAccount = () => {
    navigate('/user/deleteAccount')
  }

  return (
    <Container>
      <div className={css.title}>
        <h1>Ustawienia Zespołu</h1>
        <h2>
          Zespół <strong>{data.username}</strong>
        </h2>
      </div>
      <div className={css.data}>
        <Container>
          <>
              {loading && 'Ładownie...'}
              <div className={css.bottom}>
                <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
                  {errMsg && (
                    <p ref={errRef} className={css.formError} aria-live="assertive">
                      {errMsg}
                    </p>
                  )}
                  <div className={css.stepOne}>
                    <h2 className={css.stepTitle}>Podstawowe dane zespołu</h2>
                    <div className={css.stepOneGroup}>
                      <label htmlFor="user" className={css.stepOneLabel}>
                        <span className={css.stepOneLabelText}>
                          Nazwa zespołu:
                          <span className={css.star}>*</span>
                        </span>

                        <input
                          type="text"
                          id="user"
                          placeholder='np. "Team Pitch Polska"'
                          className={clsx({
                            [css.stepOneInput]: true,
                            [css.stepOneInputError]: !userFocus && user && !validName,
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
                          className={clsx({
                            [css.stepOneInput]: true,
                            [css.stepOneInputDisabled]: true,
                          })}
                          value={email}
                          disabled
                          autoComplete="nope"
                        />
                      </label>
                    </div>
                    <div className={css.stepOneGroup}>
                      chcesz zmienić hasło? <Link to="/changePassword">kliknij tutaj</Link>
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
                  <div className={css.stepOneSubmit}>
                    <button type="submit" className={css.stepOneButton} disabled={!validName || !validMembers}>
                      Zatwierdź zmiany
                    </button>
                    <button type="button" onClick={handdleDeleteAccount} className={css.stepOneButton}>
                      Usunięcie konta
                    </button>
                  </div>
                </form>
              </div>
          </>
        </Container>
      </div>
    </Container>
  )
}

UserSettings.propTypes = {}

export default UserSettings
