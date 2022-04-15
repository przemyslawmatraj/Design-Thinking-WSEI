import axios from './axios'
import getMessages from '../views/Message/messages'
import Token from './token'


const deleteAccount = async () => {
  return await axios
    .delete('/deleteTeam', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token.get()}`,
      },
    })
    .then((res) => {
      const ok = res.status === 200 || res.status === 204
      if (ok) {
        Token.remove('token')
        window.location.reload(false)
      }
      return getMessages('deleteAccount')[ok ? 'success' : 'error']
    })
    .catch(() => {
      return getMessages('deleteAccount')['error']
    })
}

export default deleteAccount
