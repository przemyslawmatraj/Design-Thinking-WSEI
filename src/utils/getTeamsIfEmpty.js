import Token from './token'
import axios from './axios'
import useAuth from '../hooks/useAuth'

const GetTeamsIfEmpty = async () => {
  const { teams, setTeams } = useAuth()
  const token = Token.get('token')
  if (token && teams.length === 0) {
    try {
      const res = await axios.get('/admin/getTeams', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      if (res.data === []) {
        setTeams(['Brak drużyn'])
      } else {
        setTeams(res.data)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return teams
}

export default GetTeamsIfEmpty
