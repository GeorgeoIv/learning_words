import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Header from './Header';
import MainPage from './MainPage';

export default function App({ user }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/signup" element={<SignUpForm />} />
        <Route path="/auth/signin" element={<SignInForm />} />
      </Routes>
    </div>
  );
}
