/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  //   Signup Functionality
  const createSignup = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Login Functionality
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login Functionality
  const GoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //   Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    GoogleLogin,
    logout,
    loading,
    setLoading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
