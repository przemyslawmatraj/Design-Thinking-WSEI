import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Message from '../../views/Message'
import axios from '../../utils/axios'
import Token from '../../utils/token'

const OnlyAuthenticated = ({ allowed }) => {
  const { auth, setAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const token = Token.get('token')
    if (token && !auth.data) {
      axios
        .get('/getUserData', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          setAuth({ data: res.data, accessToken: token })
          navigate(location.state?.from || `/${res.data.roles[0].role.toLowerCase()}/dashboard` || '/login', {
            replace: true,
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [auth.data, location.pathname, location.state?.from, navigate, setAuth])

  if (auth?.data?.enabled && auth?.data?.roles?.some(({ role }) => allowed.includes(role))) {
    return <Outlet />
  }

  if (auth?.data?.enabled === false && auth?.data?.roles?.some(({ role }) => allowed.includes(role))) {
    return (
      <>
        <Message type="signIn" status="error" />
        <Outlet />
      </>
    )
  }

  return <Navigate to="/login" state={{ from: location }} replace />
}

OnlyAuthenticated.propTypes = {
  allowed: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default OnlyAuthenticated
