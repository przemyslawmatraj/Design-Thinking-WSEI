import axios from './axios'
import getMessages from '../views/Message/messages'

const getToken = () => {
  return localStorage.getItem('token') || null
}

const deleteAccount = async () => {
  return await axios
    .delete('/deleteTeam', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((res) => {
      const ok = res.status === 200 || res.status === 204
      if (ok) {
        localStorage.removeItem('token')
        window.location.reload(false)
      }
      return getMessages('deleteAccount')[ok ? 'success' : 'error']
    })
    .catch((error) => {
      return getMessages('deleteAccount')['error']
    })
}

export default deleteAccount
