import React from 'react'
import axios from '../utils/axios'

const useChangeTeamSettings = (data) => {
    const [isLoading, setLoading] = React.useState(false)
    const [isSuccess, setSuccess] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')


    const changeTeamSettings = async (data) => {
        setLoading(true)
        await axios
        .patch('/editUserData', JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          setSuccess(true)
          window.location.reload(false)
        })
        .catch((err) => {
          setLoading(false)
          setErrMsg('Wystąpił błąd podczas zmiany danych. Spróbuj ponownie lub skontaktuj się z administratorem.')
        })
        .finally(() => setLoading(false))
    }
  
    return { isLoading, isSuccess, errMsg, changeTeamSettings }
}

export default useChangeTeamSettings