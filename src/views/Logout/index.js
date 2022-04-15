//component that logout user render Message component
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import Message from '../../views/Message'
import Token from '../../utils/token'

const Logout = () => {
  const { logout } = useAuth()

  useEffect(() => {
      logout()
      Token.remove('token')
    }, [])
  })

  return <Message type="logOut" status="success" />
}
export default Logout
