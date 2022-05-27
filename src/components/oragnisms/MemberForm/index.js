import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const NAME_REGEX = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]{3,}$/
const PHONE_REGEX = /^[0-9]{8,}$/
const STR_NUMBER_REGEX = /^(?=.*[0-9]).{1,}$/
const POSTAL = /^[0-9]{2}-[0-9]{3}$/

const MemberForm = ({ members, setMembers, validMembers, setValidMembers, success, membersCount }) => {
  const [errMsg, setErrMsg] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (members.length === 0) {
      handleAddMember(true)
    }
  })

  useEffect(() => {
    setErrMsg('')
  }, [members])

  useEffect(() => {
    const resutl = members.every((member, index) => {
      const {
        name,
        surname,
        email,
        school,
        phoneNumber,
        address: { street, number, postal, city },
      } = member

      const isValidName = NAME_REGEX.test(name)
      const isValidSurname = NAME_REGEX.test(surname)
      const isValidEmail = EMAIL_REGEX.test(email)
      const isValidSchool = school.length > 0
      const isValidPhoneNumber = PHONE_REGEX.test(phoneNumber)
      const isValidStreet = NAME_REGEX.test(street)
      const isValidNumber = STR_NUMBER_REGEX.test(number)
      const isValidPostal = POSTAL.test(postal)
      const isValidCity = city.length > 0

      setMembers((prevMembers) => {
        prevMembers[index].errors.name =
          !isValidName && name ? 'Pole musi zawierać przynajniej 3 znaki i nie może być puste' : null
        prevMembers[index].errors.surname =
          !isValidSurname && surname ? 'Pole musi zawierać przynajniej 3 znaki i nie może być puste' : null
        prevMembers[index].errors.email = !isValidEmail && email ? 'Niepoprawny adres email' : null
        prevMembers[index].errors.school = !isValidSchool && school ? 'Pole nie może być puste' : null
        prevMembers[index].errors.phoneNumber = !isValidPhoneNumber && phoneNumber ? 'Niepoprawny numer telefonu' : null
        prevMembers[index].errors.street = !isValidStreet && street ? 'Pole nie może być puste' : null
        prevMembers[index].errors.number = !isValidNumber && number ? 'Pole nie może być puste' : null
        prevMembers[index].errors.postal =
          !isValidPostal && postal ? 'Pole powinno zawierać znak "-" (NP. 33-100) oraz nie moze być puste' : null
        prevMembers[index].errors.city = !isValidCity && city ? 'Pole nie może być puste' : null
        return prevMembers
      })

      const isValid =
        isValidName &&
        isValidSurname &&
        isValidEmail &&
        isValidSchool &&
        isValidPhoneNumber &&
        isValidStreet &&
        isValidNumber &&
        isValidPostal &&
        isValidCity
      return isValid
    })
    setValidMembers(resutl)
  }, [members, count, setValidMembers, setMembers])

  const handleAddMember = (isLeader = false) => {
    const initialMember = {
      name: '',
      surname: '',
      email: '',
      school: '',
      phoneNumber: '',
      isLeader: isLeader,
      address: {
        street: '',
        number: '',
        postal: '',
        city: '',
      },
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

    if (members.length === 5) {
      setErrMsg('Maksymalna ilość osób w zespole to 5')
      return
    }
    if (!validMembers) {
      setErrMsg('Wypełnij poprawnie wszystkie pola')
      return
    }
    if (validMembers && members.length < 5) {
      setMembers([...members, initialMember])
      return
    }
  }

  const onMemberChange = (e, index) => {
    e.preventDefault()
    const { name, value } = e.target
    const newMembers = [...members]
    newMembers[index][name] = value
    setMembers(newMembers)
    setErrMsg(null)
  }
  const onAddressChange = (e, index) => {
    e.preventDefault()
    const { name, value } = e.target
    const newMembers = [...members]
    newMembers[index].address[name] = value
    setMembers(newMembers)
  }

  const removeMember = (e, index) => {
    setMembers((prev) => prev.filter((item) => item !== prev[index]))
  }

  return (
    <>
      <div className={css.title}>
        <h2>Krok 2</h2>
        <h3>Wprowadź dane członków zespołu</h3>
        <div>
          <p>Zespół musi posiadać od 2 do 5 członków</p>
          <p>Aktualna ilość członków: {membersCount}</p>
        </div>
      </div>
      <div className={css.memberForm}>
        {!success &&
          members.map((member, index) => (
            <div className={css.member} key={index}>
              <div className={css.memberTitle}>
                <h3>
                  Członek {index + 1}
                  {member.isLeader && ' - Lider zespołu '}
                  <span>{' ' + member.name}</span>
                </h3>
                {index !== 0 && (
                  <button type="button" onClick={(e) => removeMember(e, index)}>
                    <FontAwesomeIcon icon={faTimes} /> Usuń członka
                  </button>
                )}
              </div>
              {errMsg && <p className={css.error}>{errMsg}</p>}
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-name`}>
                  Imię:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.name,
                    [css.inputValid]: !!!member.errors.name && member.name.length > 0,
                  })}
                  id={`member-${index}-name`}
                  type="text"
                  value={member.name}
                  placeholder="Wpisz imię"
                  name="name"
                  onChange={(e) => onMemberChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.name}
                  aria-describedby={`name-${index}-err`}
                  required
                />
                {member.errors.name && (
                  <span id={`name-${index}-err`} className={css.error}>
                    {member.errors.name}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-surname`}>
                  Nazwisko:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.surname,
                    [css.inputValid]: !!!member.errors.surname && member.surname.length > 0,
                  })}
                  id={`member-${index}-surname`}
                  type="text"
                  value={member.surname}
                  placeholder="Wpisz nazwisko"
                  name="surname"
                  onChange={(e) => onMemberChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.surname}
                  aria-describedby={`surname-${index}-err`}
                  required
                />
                {member.errors.surname && (
                  <span id={`surname-${index}-err`} className={css.error}>
                    {member.errors.surname}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-email`}>
                  Email:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.email,
                    [css.inputValid]: !!!member.errors.email && member.email.length > 0,
                  })}
                  id={`member-${index}-email`}
                  type="text"
                  value={member.email}
                  placeholder="Wpisz email"
                  name="email"
                  onChange={(e) => onMemberChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.email}
                  aria-describedby={`member-email-${index}-err`}
                  required
                />
                {member.errors.email && (
                  <span id={`member-email-${index}-err`} className={css.error}>
                    {member.errors.email}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-phoneNumber`}>
                  Numer telefonu:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.phoneNumber,
                    [css.inputValid]: !!!member.errors.phoneNumber && member.phoneNumber.length > 0,
                  })}
                  id={`member-${index}-phoneNumber`}
                  type="text"
                  value={member.phoneNumber}
                  placeholder="Wpisz numer telefonu"
                  name="phoneNumber"
                  onChange={(e) => onMemberChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.phoneNumber}
                  aria-describedby={`phoneNumber-${index}-err`}
                  required
                />
                {member.errors.phoneNumber && (
                  <span id={`phoneNumber-${index}-err`} className={css.error}>
                    {member.errors.phoneNumber}
                  </span>
                )}
              </div>
              <div className={clsx(css.memberField, css.school)}>
                <label htmlFor={`member-${index}-school`}>
                  Szkoła:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.school,
                    [css.inputValid]: !!!member.errors.school && member.school.length > 0,
                  })}
                  id={`member-${index}-school`}
                  type="text"
                  value={member.school}
                  placeholder="Wpisz nazwę szkoły"
                  name="school"
                  onChange={(e) => onMemberChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.school}
                  aria-describedby={`school-${index}-err`}
                  required
                />
                {member.errors.school && (
                  <span id={`school-${index}-err`} className={css.error}>
                    {member.errors.school}
                  </span>
                )}
              </div>

              <h4>Adres członka</h4>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-address-street`}>
                  Ulica:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.street,
                    [css.inputValid]: !!!member.errors.street && member.address.street.length > 0,
                  })}
                  id={`member-${index}-address-street`}
                  type="text"
                  value={member.address.street}
                  placeholder="Wpisz nazwę ulicy"
                  name="street"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.street}
                  aria-describedby={`street-${index}-err`}
                  required
                />
                {member.errors.street && (
                  <span id={`street-${index}-err`} className={css.error}>
                    {member.errors.street}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-address-number`}>
                  Numer:<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.number,
                    [css.inputValid]: !!!member.errors.number && member.address.number.length > 0,
                  })}
                  id={`member-${index}-address-number`}
                  type="text"
                  value={member.address.number}
                  placeholder="Wpisz numer domu"
                  name="number"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.number}
                  aria-describedby={`number-${index}-err`}
                  required
                />
                {member.errors.number && (
                  <span id={`number-${index}-err`} className={css.error}>
                    {member.errors.number}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-address-postal`}>
                  Kod pocztowy(np. 33-100):<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.postal,
                    [css.inputValid]: !!!member.errors.postal && member.address.postal.length > 0,
                  })}
                  id={`member-${index}-address-postal`}
                  type="text"
                  value={member.address.postal}
                  placeholder="Wpisz kod pocztowy"
                  name="postal"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.postal}
                  aria-describedby={`postal-${index}-err`}
                  required
                />
                {member.errors.postal && (
                  <span id={`postal-${index}-err`} className={css.error}>
                    {member.errors.postal}
                  </span>
                )}
              </div>
              <div className={css.memberField}>
                <label htmlFor={`member-${index}-address-city`}>
                  Miasto :<span className={css.star}>*</span>
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.inputError]: !!member.errors.city,
                    [css.inputValid]: !!!member.errors.city && member.address.city.length > 0,
                  })}
                  id={`member-${index}-address-city`}
                  type="text"
                  value={member.address.city}
                  placeholder="Wpisz nazwę miasta"
                  name="city"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  // onFocus={() => setViewError(true)}
                  aria-invalid={!!member.errors.city}
                  aria-describedby={`city-${index}-err`}
                  required
                />
                {member.errors.city && (
                  <span id={`city-${index}-err`} className={css.error}>
                    {member.errors.city}
                  </span>
                )}
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={(e) => handleAddMember()}
          className={clsx({
            [css.addMemberBtn]: true,
            [css.addMemberBtnDisabled]: !validMembers,
          })}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
          Dodaj kolejnego członka
        </button>
      </div>
    </>
  )
}

MemberForm.propTypes = {
  members: PropTypes.array,
  setMembers: PropTypes.func,
  setValidMembers: PropTypes.func,
  validMembers: PropTypes.bool,
  success: PropTypes.bool,
  membersCount: PropTypes.number,
}

export default MemberForm
