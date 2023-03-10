import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignInForm from "./Auth/SignInForm";
import SignUpForm from "./Auth/SignUpForm";
import Header from "./Header";
import MainPage from "./MainPage";
import Themes from "./Themes";
import Profile from "./Profile";
import Words from "./Words";
import Add from "./Add";

export default function App({ user, themes, words, learned, allWords }) {
  const [currentUser, setCurrentUser] = useState(user || null);
  return (
    <div>
      {currentUser && (
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
      <Routes>
        {/* <Route path="/" element={<SignInForm />} /> */}
        <Route path="/auth/signup" element={<SignUpForm />} />
        <Route path="/auth/signin" element={<SignInForm />} />
        <Route
          path="/profile"
          element={
            <Profile learned={learned} allWords={allWords} themes={themes} />
          }
        />
        <Route path="/new" element={<Add themes={themes} />} />
        <Route
          path="themes"
          element={<Themes themes={themes} currentUser={currentUser} />}
        />
        <Route
          path="/:theme"
          element={<Words words={words} currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}
