import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Message from './Message'
import MainLayout from '../components/Layout/MainLayout'

function Root() {
  const [navVariant, setNavVariant] = React.useState('anchor')
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout navVariant={navVariant} />}>
          {/* public routes */}
          <Route index exact path="/" element={<LandingPage setNavVariant={setNavVariant} />} />
          <Route path="login" element={<LoginPage setNavVariant={setNavVariant} />} />
          <Route path="register" element={<RegisterPage setNavVariant={setNavVariant} />} />
          <Route path="validate" element={<Message type="validate" setNavVariant={setNavVariant} />} />
          <Route path="resendEmail" element={<Message type="resend" setNavVariant={setNavVariant} />} />

          {/* protected routes */}
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="settings" element={<div>Settings</div>} />

          {/* 404 */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default Root
