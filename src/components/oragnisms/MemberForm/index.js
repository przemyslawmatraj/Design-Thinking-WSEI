import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const NAME_REGEX = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}$/;
const PHONE_REGEX = /^[0-9]{8,}$/;
const STR_NUMBER_REGEX = /^.{1,}$/;
const POSTAL = /^[0-9]{2}-[0-9]{3}$/;

const MemberForm = ({ members, setMembers, validMembers, setValidMembers }) => {
  const [errMsg, setErrMsg] = useState('');
  const [viewError, setViewError] = useState(false);
  const handleAddMember = (isLeader = false) => {
    const initialMember = {
      name: '',
      surname: '',
      email: '',
      school: '',
      phoneNumber: '',
      isLeader: isLeader,
      adress: {
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
    };

    if (validMembers) {
      setViewError(false);
      setMembers([...members, initialMember]);
    } else {
      setViewError(true);
      setErrMsg('Wszystkie pola muszą zostać poprawnie wypełnione');
    }
  };

  useEffect(() => {
    if (members.length === 0) {
      handleAddMember(true);
    }
  }, [members]);

  useEffect(() => {
    const resutl = members.every((member, index) => {
      const {
        name,
        surname,
        email,
        school,
        phoneNumber,
        adress: { street, number, postal, city },
      } = member;

      const isValidName = NAME_REGEX.test(name);
      const isValidSurname = NAME_REGEX.test(surname);
      const isValidEmail = EMAIL_REGEX.test(email);
      const isValidSchool = school.length > 0;
      const isValidPhoneNumber = PHONE_REGEX.test(phoneNumber);
      const isValidStreet = NAME_REGEX.test(street);
      const isValidNumber = STR_NUMBER_REGEX.test(number);
      const isValidPostal = POSTAL.test(postal);
      const isValidCity = city.length > 0;
      setMembers((prevMembers) => {
        prevMembers[index].errors.name = !isValidName ? 'Pole nie może być puste' : null;
        prevMembers[index].errors.surname = !isValidSurname ? 'Pole nie może być puste' : null;
        prevMembers[index].errors.email = !isValidEmail ? 'Niepoprawny adres email' : null;
        prevMembers[index].errors.school = !isValidSchool ? 'Pole nie może być puste' : null;
        prevMembers[index].errors.phoneNumber = !isValidPhoneNumber ? 'Niepoprawny numer telefonu' : null;
        prevMembers[index].errors.street = !isValidStreet ? 'Pole nie może być puste' : null;
        prevMembers[index].errors.number = !isValidNumber ? 'Pole nie może być puste' : null;
        prevMembers[index].errors.postal = !isValidPostal ? 'Pole powinno zawierać znak "-" (NP. 33-100) oraz nie moe być puste' : null;
        prevMembers[index].errors.city = !isValidCity ? 'Pole nie może być puste' : null;
        return prevMembers;
      });

      const isValid =
        isValidName &&
        isValidSurname &&
        isValidEmail &&
        isValidSchool &&
        isValidPhoneNumber &&
        isValidStreet &&
        isValidNumber &&
        isValidPostal &&
        isValidCity;
      return isValid;
    });
    setValidMembers(resutl);
  }, [members]);

  const onMemberChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newMembers = [...members];
    newMembers[index][name] = value;
    newMembers[index].errors[name] = null;
    setMembers(newMembers);
    setErrMsg(null);
  };
  const onAdressChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newMembers = [...members];
    newMembers[index].adress[name] = value;
    newMembers[index].errors[name] = null;
    setMembers(newMembers);
  };

  const removeMember = (e, index) => {
    setMembers((prev) => prev.filter((item) => item !== prev[index]));
  };

  const inputClases = (name, index) => {
    const member = members[index];
    const { errors } = member;
    if (errors[name]) {
      return clsx(css.input, css.error);
    }
    return css.input;
  };

  return (
    <div className={css.memberForm}>
      <span>Krok 1</span>
      <h2>Wprowadź dane członków zespołu</h2>
      {errMsg && <p className={css.errMsg}>{errMsg}</p>}
      {JSON.stringify(members)}
      {members.map((member, index) => (
        <div className={css.member} key={index}>
          <h3>Członek {index + 1}</h3>
          <div className={css.member__name}>
            <label htmlFor={`member-${index}-name`}>
              Imię
              {member.errors.name && viewError && <span className={css.error}>{member.errors.name}</span>}
            </label>
            <input
              className={(e) => inputClases(e.target.name, index)}
              id={`member-${index}-name`}
              type="text"
              value={member.name}
              name="name"
              onChange={(e) => onMemberChange(e, index)}
            />
          </div>
          <div className={css.member__surname}>
            <label htmlFor={`member-${index}-surname`}>
              Nazwisko
              {member.errors.surname && viewError && <span className={css.error}>{member.errors.surname}</span>}
            </label>
            <input
              className={(e) => inputClases(e.target.name, index)}
              id={`member-${index}-surname`}
              type="text"
              value={member.surname}
              name="surname"
              onChange={(e) => onMemberChange(e, index)}
            />
          </div>
          <div className={css.member__email}>
            <label htmlFor={`member-${index}-email`}>
              Email{member.errors.email && viewError && <span className={css.error}>{member.errors.email}</span>}
            </label>
            <input
              className={(e) => inputClases(e.target.name, index)}
              id={`member-${index}-email`}
              type="text"
              value={member.email}
              name="email"
              onChange={(e) => onMemberChange(e, index)}
            />
          </div>
          <div className={css.member__school}>
            <label htmlFor={`member-${index}-school`}>
              Szkoła{member.errors.school && viewError && <span className={css.error}>{member.errors.school}</span>}
            </label>
            <input
              className={(e) => inputClases(e.target.name, index)}
              id={`member-${index}-school`}
              type="text"
              value={member.school}
              name="school"
              onChange={(e) => onMemberChange(e, index)}
            />
          </div>
          <div className={css.member__phoneNumber}>
            <label htmlFor={`member-${index}-phoneNumber`}>
              Numer telefonu{member.errors.phoneNumber && viewError && <span className={css.error}>{member.errors.phoneNumber}</span>}
            </label>
            <input
              className={(e) => inputClases(e.target.name, index)}
              id={`member-${index}-phoneNumber`}
              type="text"
              value={member.phoneNumber}
              name="phoneNumber"
              onChange={(e) => onMemberChange(e, index)}
            />
          </div>
          <div className={css.member__adress}>
            <label htmlFor={`member-${index}-adress`}>Adres</label>
            <div className={css.member__adress__street}>
              <label htmlFor={`member-${index}-adress-street`}>
                Ulica{member.errors.street && viewError && <span className={css.error}>{member.errors.street}</span>}
              </label>
              <input
                className={(e) => inputClases(e.target.name, index)}
                id={`member-${index}-adress-street`}
                type="text"
                value={member.adress.street}
                name="street"
                onChange={(e) => onAdressChange(e, index)}
              />
            </div>
            <div className={css.member__adress__number}>
              <label htmlFor={`member-${index}-adress-number`}>
                Numer{member.errors.number && viewError && <span className={css.error}>{member.errors.number}</span>}
              </label>
              <input
                className={(e) => inputClases(e.target.name, index)}
                id={`member-${index}-adress-number`}
                type="text"
                value={member.adress.number}
                name="number"
                onChange={(e) => onAdressChange(e, index)}
              />
            </div>
            <div className={css.member__adress__postal}>
              <label htmlFor={`member-${index}-adress-postal`}>
                Kod pocztowy(np. 33-100){member.errors.postal && viewError && <span className={css.error}>{member.errors.postal}</span>}
              </label>
              <input
                className={(e) => inputClases(e.target.name, index)}
                id={`member-${index}-adress-postal`}
                type="text"
                value={member.adress.postal}
                name="postal"
                onChange={(e) => onAdressChange(e, index)}
              />
            </div>
            <div className={css.member__adress__city}>
              <label htmlFor={`member-${index}-adress-city`}>
                Miasto{member.errors.city && viewError && <span className={css.error}>{member.errors.city}</span>}
              </label>
              <input
                className={(e) => inputClases(e.target.name, index)}
                id={`member-${index}-adress-city`}
                type="text"
                value={member.adress.city}
                name="city"
                onChange={(e) => onAdressChange(e, index)}
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
  );
};

MemberForm.propTypes = {
  members: PropTypes.array,
  setMembers: PropTypes.func,
  setValidMembers: PropTypes.bool,
  validMembers: PropTypes.bool,
};

export default MemberForm;
