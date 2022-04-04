import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './index.module.scss'
import Button from '../../components/atoms/Button'
import resendEmail from '../../utils/resendEmail'
import validateEmail from '../../utils/validateEmail'
import getMessages from './messages'

const Message = ({ type, status, email }) => {
  const [message, setMessage] = useState(null)

  const queryParams = new URLSearchParams(window.location.search)
  const emailQuery = email || queryParams.get('email') || null
  const tokenQuery = queryParams.get('token') || null

  useEffect(() => {
    const checkType = async () => {
      if (type === 'validate' && tokenQuery) {
        setMessage(await validateEmail(tokenQuery))
      } else if (type === 'signUp' || type === 'signIn') {
        setMessage(getMessages(type)[status])
      } else if (type === 'resend') {
        setMessage(await resendEmail(emailQuery))
      }
    }
    checkType()
  })

  const handleResendEmail = async () => {
    const message = await resendEmail(emailQuery)
    setMessage(message)
  }
  return (
    <>
      <div className={css.main}>
        <div className={css.message}>
          <h1 className={css.title}>{message && message.title}</h1>
          <p className={css.description}>{message && message.description}</p>
        </div>
        {message &&
          message.buttons?.map((button) =>
            button.type === 'button' ? (
              <Button
                key={button.name}
                onClick={() => {
                  emailQuery && handleResendEmail()
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
  )
}

Message.propTypes = {
  type: PropTypes.string,
  status: PropTypes.string,
  email: PropTypes.string,
}

export default Message
