import { useState } from 'react'
import axios from '../utils/axios'
const useRegisterNewTeam = () => {
    const [errFromServer, setErrFromServer] = useState('')
    const [isSuccess, setSuccess] = useState(false)
    const [response, setResponse] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    const registerNewTeam = async (data) => {
      setLoading(true)

      const membersWithLeaderFlag = data.members.map((member, index) => {
            return {
                ...member,
                isLeader: index === 0 ? true : false,
            }
        })

      await axios
        .post('/register', JSON.stringify({
            ...data,
            members: membersWithLeaderFlag,
        }), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setResponse(res)
          setSuccess(true)
        })
        .catch((err) => {
          setErrFromServer(
            'Wystąpił błąd podczas rejestracji, prawdopodobnie podany email juz istnieje lub masz kłopot z połączeniem. Spróbuj ponownie lub skontaktuj się z administratorem.'
          )
        })
        .finally(() => {
          setLoading(false)
        }
        )
      }
      
      return { registerNewTeam, errFromServer, isSuccess, response, isLoading }
  }

export default useRegisterNewTeam