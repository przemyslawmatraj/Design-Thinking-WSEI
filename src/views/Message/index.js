import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './index.module.scss';
import Button from '../../components/atoms/Button';
import resendEmail from '../../utils/resendEmail';
import validateEmail from '../../utils/validateEmail';
import getMessages from './messages';

const Message = ({ type, status, em }) => {
  const [message, setMessage] = useState(null);

  const queryParams = new URLSearchParams(window.location.search);
  const email = em || queryParams.get('email') || null;
  const token = queryParams.get('token') || null;

  useEffect(() => {
    if (type === 'validate' && token) {
      setMessage(validateEmail(token));
    } else if (type === 'signUp' || type === 'signIn') {
      setMessage(getMessages(type)[status]);
    } else if (type === 'resend') {
      setMessage(resendEmail(email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={css.main}>
        <div className={css.message}>
          <h1 className={css.title}>{message && message?.title}</h1>
          <p className={css.description}>{message && message?.description}</p>
        </div>
        {message &&
          message?.buttons.map((button) =>
            button.type === 'button' ? (
              <Button
                key={button.name}
                onClick={() => {
                  email && setMessage(resendEmail(email));
                }}
                tag="span"
                color="black"
                className={css.button}
              >
                {button.name}
              </Button>
            ) : (
              <Link key={button.name} to={button.path} className={css.button}>
                {button.name}
              </Link>
            )
          )}
      </div>
    </>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  status: PropTypes.string,
  em: PropTypes.string,
};

export default Message;
