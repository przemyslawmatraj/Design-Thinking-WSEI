//component that logout user render Message component
import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import Message from '../../views/Message'

const Logout = () => {
  const { logout } = useAuth()

  useEffect(() => {
    logout()
    localStorage.removeItem('token')
  })

  return <Message type="logOut" status="success" />
}
export default Logout
