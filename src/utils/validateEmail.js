import axios from './axios'
import getMessages from '../views/Message/messages'

const validateEmail = async (token) => {
  return axios
    .get('/validate?token=' + token)
    .then((res) => {
      return getMessages('validation')[res.status === 200 ? 'success' : 'error']
    })
    .catch((error) => {
      return getMessages('validation')['error']
    })
}

export default validateEmail
