import React, { useContext , useEffect, useState } from 'react';
import { auth } from '../firebase_config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
  }


export function AuthProvider({children}) {

 const [currentUser, setCurrentUser] = useState()
 const [loading, setLoading] = useState(true)

function signup(email, password) {
    return createUserWithEmailAndPassword( auth, email, password);
}

function update(name)  {
  updateProfile(auth.currentUser, {displayName: name});
  console.log(name);

}

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }


function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

function googleSignIn() {
     const googleAuthProvider = new GoogleAuthProvider();
     return signInWithPopup(auth, googleAuthProvider);
  }

function logout() {
    return signOut(auth);
  }

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
        setCurrentUser(user)
        setLoading(false)
    })
    
    return unsubscribe;
} , [])


 const value = {
     currentUser,
     signup,
     login,
     resetPassword,
     googleSignIn,
     logout,
     update
 }
  
  return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
  )
}












