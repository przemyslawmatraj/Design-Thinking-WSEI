import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const [teams, setTeams] = useState([])

  const logout = () => {
    setAuth({})
    setTeams([])
  }

  return <AuthContext.Provider value={{ auth, setAuth, teams, setTeams, logout }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext
