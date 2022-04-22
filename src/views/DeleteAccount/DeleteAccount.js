import React from 'react'
import { Navigate } from 'react-router-dom'
import deleteAccount from '../../utils/deleteAccount'

const DeletaAccount = () => {
  deleteAccount()
  return <Navigate to="/" />
}

export default DeletaAccount
