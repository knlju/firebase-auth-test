import React, {createContext, useState, useEffect, useContext} from 'react';
import firebase from "firebase/compat/app"
import {auth} from "../firebase";

const gitHubAuthProvider = new firebase.auth.GithubAuthProvider()
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

  const [user, setUser] = useState()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    return unsubscribe
  }, [])

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function loginWithGitHub() {
    return auth.signInWithPopup(gitHubAuthProvider)
  }

  function logout() {
    return auth.signOut()
  }

  const authValue = {
    user,
    login,
    register,
    loginWithGitHub,
    logout
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;