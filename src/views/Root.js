import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import Logout from './Logout'
import RegisterPage from './RegisterPage'
import Message from './Message'
import MainLayout from '../components/Layout/MainLayout'
import OnlyAuthenticated from '../routes/OnlyAuthenticated/OnlyAuthenticated'
import UserDashboard from './User/UserDashboard'
import UserIdea from './User/UserIdea'
import UserSettings from './User/UserSettings'

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* public routes */}
          <Route index exact path="/" element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="logout" element={<Logout />} />
          <Route path="validate" element={<Message type="validate" />} />
          <Route path="resendEmail" element={<Message type="resend" />} />

          {/* user routes */}
          <Route path="/user" element={<OnlyAuthenticated allowed={['USER']} />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="idea" element={<UserIdea />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin" element={<OnlyAuthenticated allowed={['ADMIN']} />}>
            <Route path="dashboard" element={<div>Dasboard</div>} />
            <Route path="settings" element={<div>Ustawienia</div>} />
            <Route path="ideaList" element={<div>Lista Pomysłów</div>} />
            <Route path="idea" element={<div>Pomysł</div>} />
            <Route path="userList" element={<div>Lista Użytkowników</div>} />
            <Route path="user" element={<div>Użytkownik</div>} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default Root
