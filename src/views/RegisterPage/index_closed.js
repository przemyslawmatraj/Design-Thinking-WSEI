import React from 'react'
import Message from '../Message'

const RegisterPage = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return <Message type={'signUp'} status={'closed'} />
}

export default RegisterPage
