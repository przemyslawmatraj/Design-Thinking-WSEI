import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import css from './index.module.scss'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const NAME_REGEX = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]{2,}$/
const PHONE_REGEX = /^[0-9]{8,}$/
const STR_NUMBER_REGEX = /^.{1,}$/
const POSTAL = /^[0-9]{2}-[0-9]{3}$/

const MemberForm = ({ members, setMembers, validMembers, setValidMembers, success }) => {
  const [errMsg, setErrMsg] = useState('')
  const [count, setCount] = useState(0)
  const handleAddMember = (isLeader = false) => {
    const initialMember = {
      name: 'Przemo',
      surname: 'Matraj',
      email: 'osoba1@gmailk.com',
      school: 'WSEI',
      phoneNumber: '334466334',
      isLeader: isLeader,
      address: {
        street: 'Sezamkowa',
        number: '12',
        postal: '33-100',
        city: 'Tarnów',
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

    if (validMembers) {
      setMembers([...members, initialMember])
    } else {
      setErrMsg('Wszystkie pola muszą zostać poprawnie wypełnione')
    }
  }

  useEffect(() => {
    if (members.length === 0) {
      handleAddMember(true)
    }
  })

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
          !isValidPostal && postal ? 'Pole powinno zawierać znak "-" (NP. 33-100) oraz nie moe być puste' : null
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
    <div className={css.memberForm}>
      <span>Krok 1</span>
      <h2>Wprowadź dane członków zespołu</h2>
      {errMsg && <p className={css.errMsg}>{errMsg}</p>}
      {!success &&
        members.map((member, index) => (
          <div className={css.member} key={index}>
            <h3>Członek {index + 1}</h3>
            <div className={css.member__name}>
              <label htmlFor={`member-${index}-name`}>
                Imię
                {!!member.errors.name
                  ? member.name.length > 0 && <FontAwesomeIcon color="red" icon={faTimes} />
                  : member.name.length > 0 && <FontAwesomeIcon color="green" icon={faCheck} />}
                {member.errors.name && (
                  <span id={`name-${index}-err`} className={css.error}>
                    {member.errors.name}
                  </span>
                )}
              </label>
              <input
                className={clsx({
                  [css.input]: true,
                  [css.errorInput]: !!member.errors.name,
                  [css.validInput]: !!!member.errors.name && member.name.length > 0,
                })}
                id={`member-${index}-name`}
                type="text"
                value={member.name}
                name="name"
                onChange={(e) => onMemberChange(e, index)}
                onBlur={() => setCount(count + 1)}
                aria-invalid={!!member.errors.name}
                aria-describedby={`name-${index}-err`}
                required
              />
            </div>
            <div className={css.member__surname}>
              <label htmlFor={`member-${index}-surname`}>
                Nazwisko
                {member.errors.surname && (
                  <span id={`surname-${index}-err`} className={css.error}>
                    {member.errors.surname}
                  </span>
                )}
              </label>
              <input
                className={clsx({
                  [css.input]: true,
                  [css.errorInput]: !!member.errors.surname,
                  [css.validInput]: !!!member.errors.surname && member.surname.length > 0,
                })}
                id={`member-${index}-surname`}
                type="text"
                value={member.surname}
                name="surname"
                onChange={(e) => onMemberChange(e, index)}
                onBlur={() => setCount(count + 1)}
                aria-invalid={!!member.errors.surname}
                aria-describedby={`surname-${index}-err`}
                required
              />
            </div>
            <div className={css.member__email}>
              <label htmlFor={`member-${index}-email`}>
                Email
                {member.errors.email && (
                  <span id={`member-email-${index}-err`} className={css.error}>
                    {member.errors.email}
                  </span>
                )}
              </label>
              <input
                className={clsx({
                  [css.input]: true,
                  [css.errorInput]: !!member.errors.email,
                  [css.validInput]: !!!member.errors.email && member.email.length > 0,
                })}
                id={`member-${index}-email`}
                type="text"
                value={member.email}
                name="email"
                onChange={(e) => onMemberChange(e, index)}
                onBlur={() => setCount(count + 1)}
                aria-invalid={!!member.errors.email}
                aria-describedby={`member-email-${index}-err`}
                required
              />
            </div>
            <div className={css.member__school}>
              <label htmlFor={`member-${index}-school`}>
                Szkoła
                {member.errors.school && (
                  <span id={`school-${index}-err`} className={css.error}>
                    {member.errors.school}
                  </span>
                )}
              </label>
              <input
                className={clsx({
                  [css.input]: true,
                  [css.errorInput]: !!member.errors.school,
                  [css.validInput]: !!!member.errors.school && member.school.length > 0,
                })}
                id={`member-${index}-school`}
                type="text"
                value={member.school}
                name="school"
                onChange={(e) => onMemberChange(e, index)}
                onBlur={() => setCount(count + 1)}
                aria-invalid={!!member.errors.school}
                aria-describedby={`school-${index}-err`}
                required
              />
            </div>
            <div className={css.member__phoneNumber}>
              <label htmlFor={`member-${index}-phoneNumber`}>
                Numer telefonu
                {member.errors.phoneNumber && (
                  <span id={`phoneNumber-${index}-err`} className={css.error}>
                    {member.errors.phoneNumber}
                  </span>
                )}
              </label>
              <input
                className={clsx({
                  [css.input]: true,
                  [css.errorInput]: !!member.errors.phoneNumber,
                  [css.validInput]: !!!member.errors.phoneNumber && member.phoneNumber.length > 0,
                })}
                id={`member-${index}-phoneNumber`}
                type="text"
                value={member.phoneNumber}
                name="phoneNumber"
                onChange={(e) => onMemberChange(e, index)}
                onBlur={() => setCount(count + 1)}
                aria-invalid={!!member.errors.phoneNumber}
                aria-describedby={`phoneNumber-${index}-err`}
                required
              />
            </div>
            <div className={css.member__address}>
              <label htmlFor={`member-${index}-address`}>Adres</label>
              <div className={css.member__address__street}>
                <label htmlFor={`member-${index}-address-street`}>
                  Ulica
                  {member.errors.street && (
                    <span id={`street-${index}-err`} className={css.error}>
                      {member.errors.street}
                    </span>
                  )}
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.errorInput]: !!member.errors.street,
                    [css.validInput]: !!!member.errors.street && member.address.street.length > 0,
                  })}
                  id={`member-${index}-address-street`}
                  type="text"
                  value={member.address.street}
                  name="street"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.street}
                  aria-describedby={`street-${index}-err`}
                  required
                />
              </div>
              <div className={css.member__address__number}>
                <label htmlFor={`member-${index}-address-number`}>
                  Numer
                  {member.errors.number && (
                    <span id={`number-${index}-err`} className={css.error}>
                      {member.errors.number}
                    </span>
                  )}
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.errorInput]: !!member.errors.number,
                    [css.validInput]: !!!member.errors.number && member.address.number.length > 0,
                  })}
                  id={`member-${index}-address-number`}
                  type="text"
                  value={member.address.number}
                  name="number"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.number}
                  aria-describedby={`number-${index}-err`}
                  required
                />
              </div>
              <div className={css.member__address__postal}>
                <label htmlFor={`member-${index}-address-postal`}>
                  Kod pocztowy(np. 33-100)
                  {member.errors.postal && (
                    <span id={`postal-${index}-err`} className={css.error}>
                      {member.errors.postal}
                    </span>
                  )}
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.errorInput]: !!member.errors.postal,
                    [css.validInput]: !!!member.errors.postal && member.address.postal.length > 0,
                  })}
                  id={`member-${index}-address-postal`}
                  type="text"
                  value={member.address.postal}
                  name="postal"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  aria-invalid={!!member.errors.postal}
                  aria-describedby={`postal-${index}-err`}
                  required
                />
              </div>
              <div className={css.member__address__city}>
                <label htmlFor={`member-${index}-address-city`}>
                  Miasto
                  {member.errors.city && (
                    <span id={`city-${index}-err`} className={css.error}>
                      {member.errors.city}
                    </span>
                  )}
                </label>
                <input
                  className={clsx({
                    [css.input]: true,
                    [css.errorInput]: !!member.errors.city,
                    [css.validInput]: !!!member.errors.city && member.address.city.length > 0,
                  })}
                  id={`member-${index}-address-city`}
                  type="text"
                  value={member.address.city}
                  name="city"
                  onChange={(e) => onAddressChange(e, index)}
                  onBlur={() => setCount(count + 1)}
                  // onFocus={() => setViewError(true)}
                  aria-invalid={!!member.errors.city}
                  aria-describedby={`city-${index}-err`}
                  required
                />
              </div>
            </div>
            {index !== 0 && (
              <button type="button" onClick={(e) => removeMember(e, index)}>
                <FontAwesomeIcon icon={faTimes} /> Usuń członka
              </button>
            )}
          </div>
        ))}

      <button type="button" onClick={(e) => handleAddMember()} className={css.addMemberBtn}>
        <FontAwesomeIcon icon={faCirclePlus} />
        Dodaj członka
      </button>
    </div>
  )
}

MemberForm.propTypes = {
  members: PropTypes.array,
  setMembers: PropTypes.func,
  setValidMembers: PropTypes.func,
  validMembers: PropTypes.bool,
  success: PropTypes.bool,
}

export default MemberForm
