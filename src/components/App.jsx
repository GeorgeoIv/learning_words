import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInForm from './Auth/SignInForm';
import SignUpForm from './Auth/SignUpForm';
import Header from './Header';
import MainPage from './MainPage';
import Themes from './Themes';
import Words from './Words';

export default function App({ user, themes, words }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div>
      {currentUser && <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />}
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/auth/signup" element={<SignUpForm />} />
        <Route path="/auth/signin" element={<SignInForm />} />
        <Route path="themes" element={<Themes themes={themes} currentUser={currentUser} />} />
        <Route path="/:theme" element={<Words words={words} currentUser={currentUser} />} />

      </Routes>
    </div>
  );
}
