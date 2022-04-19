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
import AdminDashboard from './Admin/AdminDashboard'
import ChangePassword from './ChangePassword'
import * as roles from '../constants/roles'
import Dashboard from '../routes/Dashboard/Dashboard'
import Teamlist from './Admin/TeamList/TeamList'
import SingleTeam from './Admin/SingleTeam/SingleTeam'
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
          <Route path="/user" element={<OnlyAuthenticated allowed={[roles.USER, roles.TEST]} />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="settings" element={<UserSettings />} />
            <Route path="idea" element={<UserIdea />} />
            <Route path="ideaSend" element={<Message type="ideaSend" status="success" />} />
            <Route path="deleteAccount" element={<Message type="deleteAccount" status="question" />} />
          </Route>

          {/* admin routes */}
          <Route path="/admin/*" element={<OnlyAuthenticated allowed={[roles.ADMIN]} />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="userList" element={<Teamlist />} />
            <Route path="user/:id" element={<SingleTeam />} />
          </Route>

          {/* change password */}
          <Route path="/" element={<OnlyAuthenticated allowed={[roles.ADMIN, roles.USER]} />}>
            <Route path="changePassword" element={<ChangePassword />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* 404 */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default Root
