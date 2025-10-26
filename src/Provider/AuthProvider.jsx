/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(user);

  //   Signup Functionality
  const createSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login Functionality
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  //   Logout
  const logout = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    createSignup,
    userLogin,
    logout,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
