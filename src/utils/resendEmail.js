import axios from './axios'
import getMessages from '../views/Message/messages'

const resendEmail = (email) => {
  return axios
    .get('/resendEmail?email=' + email)
    .then((res) => {
      return getMessages('resend')[res.status === 200 ? 'success' : 'error']
    })
    .catch(() => {
      return getMessages('resend')['error']
    })
}

export default resendEmail
