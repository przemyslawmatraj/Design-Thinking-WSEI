import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import EmailConfirmation from './EmailConfirmation';
import MainLayout from '../components/Layout/MainLayout';

function Root() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* public routes */}
          <Route index exact path="/" element={<LandingPage />} />
          <Route path="confirm/:token" element={<EmailConfirmation />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          {/* protected routes */}
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="settings" element={<div>Settings</div>} />

          {/* 404 */}
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default Root;
