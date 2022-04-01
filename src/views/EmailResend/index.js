import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import axios from '../../utils/axios';

const EmailConfirmation = () => {
  const [email, setEmail] = useState('');
  const search = useLocation().search;
  setEmail(new URLSearchParams(search).get('email'));
  console.log(email);

  useEffect(() => {
    axios
      .post('/resendEmail?email=' + email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  return (
    <div className={css.emailConfirmation}>
      <h1>Email {email} Confirmation</h1>
      <p>Please check your email to complete your registration</p>
    </div>
  );
};

EmailConfirmation.propTypes = {};

export default EmailConfirmation;
