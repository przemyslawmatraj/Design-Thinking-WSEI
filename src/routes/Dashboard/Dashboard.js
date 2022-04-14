import React from 'react'
import useAuth from '../../hooks/useAuth'
import { useLocation, Navigate } from 'react-router-dom'

const Dashboard = () => {
  const { auth } = useAuth()
  const location = useLocation()
  console.log(auth)
  return <Navigate to={`/${auth.data?.roles[0].role.toLowerCase()}/dashboard`} state={{ from: location }} />
}

export default Dashboard
