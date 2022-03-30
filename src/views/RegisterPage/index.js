import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import axios from '../../utils/axios';

import { default as StepTwo } from '../../components/oragnisms/MemberForm';
/* Regex */
const PASSWORD_LOWERCASE = /^(?=.*[a-z]).{0,}$/;
const PASSWORD_UPPERCASE = /^(?=.*[A-Z]).{0,}$/;
const PASSWORD_NUMBER = /^(?=.*[0-9]).{0,}$/;
const PASSWORD_MIN_CHAR = /^.{8,}$/;
const PASSWORD_ALL = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
const USER_REGEX = /^[A-Z].{2,}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const RegisterPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  /* User State */
  const [user, setUser] = useState('Team');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  /* Password State */
  const [pwd, setPwd] = useState('Ciastko12');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  /* Password Dots State */
  const [pwdDot1, setPwdDot1] = useState(false);
  const [pwdDot2, setPwdDot2] = useState(false);
  const [pwdDot3, setPwdDot3] = useState(false);
  const [pwdDot4, setPwdDot4] = useState(false);

  /* Password Match State */
  const [matchPwd, setMatchPwd] = useState('Ciastko12');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  /* Email State */
  const [email, setEmail] = useState('jupila.orange@gmail.com');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  /* Members State */
  const [members, setMembers] = useState([]);
  const [validMembers, setValidMembers] = useState(true);

  /* Submit State */
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log(validEmail, validName, validPwd, validMatch, validMembers);
  }, [validEmail, validName, validPwd, validMatch, validMembers]);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  /* Form Validation */
  useEffect(() => {
    /* User Validation */
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    /* Pwd Validation */
    const result = PASSWORD_MIN_CHAR.test(pwd);
    const result2 = PASSWORD_LOWERCASE.test(pwd);
    const result3 = PASSWORD_NUMBER.test(pwd);
    const result4 = PASSWORD_UPPERCASE.test(pwd);
    setValidPwd(result && result2 && result3 && result4);

    /* Pwd Dots */
    setPwdDot1(result);
    setPwdDot2(result2);
    setPwdDot3(result3);
    setPwdDot4(result4);

    /* Pwd Match Valiadtion */
    const result5 = pwd === matchPwd;
    setValidMatch(result5);
  }, [pwd, matchPwd]);

  useEffect(() => {
    /* Email Validation */
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    /* Error Message */
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!USER_REGEX.test(user) || !PASSWORD_ALL.test(pwd) || matchPwd !== pwd || !EMAIL_REGEX.test(email)) {
      setErrMsg('Wszystkie pola muszą być poprawnie wypełnione');
      return;
    }
    members.forEach((member) => {
      delete member.errors;
    });
    console.log('błedy powyzejj nie istotne');
    console.log(JSON.stringify({ username: user, password: pwd, email, members }));
    try {
      const response = await axios.post(
        '/register',
        {
          username: user,
          password: pwd,
          email,
          members,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
          withCredentials: true,
        }
      );

      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      console.log('Error po wysłaniu zapytania', err);
      setErrMsg(err.response.data.message);
    }
  };

  return (
    <>
      {success ? (
        <div className={css.success}>
          <FontAwesomeIcon icon={faCheck} />
          <h2>Konto zostało utworzone</h2>
          <p>
            Teraz możesz się zalogować na swoje konto. <br />
            <a href="/login">Zaloguj się</a>
          </p>
        </div>
      ) : (
        <>
          {errMsg && (
            <p ref={errRef} aria-live="assertive">
              {errMsg}
            </p>
          )}
          <h1>Rejestracja</h1>
          <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
            <div className={css.stepOne}>
              <div className={css.stepOne__group}>
                <label htmlFor="user" className={css.stepOne__label}>
                  <span className={css.stepOne__label__text}>Nazwa zespołu:</span>
                  {user && !validName && <FontAwesomeIcon icon={faTimes} className={css.stepOne__label__error} />}
                  {user && validName && <FontAwesomeIcon icon={faCheck} className={css.stepOne__label__success} />}
                  <input
                    type="text"
                    id="user"
                    className={clsx({
                      [css.stepOne__input]: true,
                      [css.stepOne__input__error]: !userFocus && user && !validName,
                      [css.stepOne__input__focus]: userFocus,
                      [css.stepOne__input__success]: validName,
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
                  <span id="user-err" className={css.stepOne__error}>
                    Nazwa powinna rozpoczynać się od duzej litery oraz składać się z przynajmniej 4 znaków
                  </span>
                )}
              </div>
              <div className={css.stepOne__group}>
                <label htmlFor="email" className={css.stepOne__label}>
                  <span className={css.stepOne__label__text}>Email:</span>
                  {email && !validEmail && <FontAwesomeIcon icon={faTimes} className={css.stepOne__label__error} />}
                  {email && validEmail && <FontAwesomeIcon icon={faCheck} className={css.stepOne__label__success} />}
                  <input
                    type="text"
                    id="email"
                    className={clsx({
                      [css.stepOne__input]: true,
                      [css.stepOne__input__error]: !emailFocus && email && !validEmail,
                      [css.stepOne__input__focus]: emailFocus,
                      [css.stepOne__input__success]: validEmail,
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
                  <span id="email-err" className={css.stepOne__error}>
                    Email jest niepoprawny
                  </span>
                )}
              </div>
              <div className={css.stepOne__group}>
                <label htmlFor="pwd" className={css.stepOne__label}>
                  <span className={css.stepOne__label__text}>Hasło:</span>
                  {pwd && !validPwd && <FontAwesomeIcon icon={faTimes} className={css.stepOne__label__error} />}
                  {pwd && validPwd && <FontAwesomeIcon icon={faCheck} className={css.stepOne__label__success} />}
                  <input
                    type="password"
                    id="pwd"
                    className={clsx({
                      [css.stepOne__input]: true,
                      [css.stepOne__input__error]: !pwdFocus && pwd && !validPwd,
                      [css.stepOne__input__focus]: pwdFocus,
                      [css.stepOne__input__success]: validPwd,
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
                  <span id="pwd-err" className={css.stepOne__error}>
                    Wprowadź poprawne hasło
                  </span>
                )}
                <div className={css.stepOne__pwd__dots}>
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
              <div className={css.stepOne__group}>
                <label htmlFor="match" className={css.stepOne__label}>
                  <span className={css.stepOne__label__text}>Confirm Password</span>
                  {matchPwd && !validMatch && <FontAwesomeIcon icon={faTimes} className={css.stepOne__label__error} />}
                  {matchPwd && validMatch && <FontAwesomeIcon icon={faCheck} className={css.stepOne__label__success} />}
                  <input
                    type="password"
                    id="match"
                    className={clsx({
                      [css.stepOne__input]: true,
                      [css.stepOne__input__error]: !matchFocus && matchPwd && !validMatch,
                      [css.stepOne__input__focus]: matchFocus,
                      [css.stepOne__input__success]: matchPwd && validMatch,
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
                  <span id="pwdmatch-err" className={css.stepOne__error}>
                    Hasła nie są identyczne
                  </span>
                )}
              </div>
            </div>
            <StepTwo members={members} setMembers={setMembers} setValidMembers={setValidMembers} validMembers={validMembers} />
            <div className={css.stepOne__group}>
              <button type="submit" className={css.stepOne__submit} disabled={!validName || !validPwd || !validMatch || !validEmail || !validMembers}>
                Zarejestruj zespół
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
