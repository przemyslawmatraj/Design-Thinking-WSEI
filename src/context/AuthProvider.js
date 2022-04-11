import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})

  const logout = () => {
    setAuth({})
  }

  return <AuthContext.Provider value={{ auth, setAuth, logout }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthContext
