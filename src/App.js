import React, {useState, useEffect} from "react";
// import fire from './fire';
import Login from './Login';
import Logout from './Logout';
import "./App.css";

import { initializeApp } from "firebase/app";

import 'firebase/firestore';
import 'firebase/database'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
require ('firebase/auth');
<script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js" src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqVKfG3eIu2rm3mtO5eoTv3p--7YMcTxQ",
  authDomain: "conanima-aac64.firebaseapp.com",
  projectId: "conanima-aac64",
  storageBucket: "conanima-aac64.appspot.com",
  messagingSenderId: "438209816249",
  appId: "1:438209816249:web:b9069f44218c62c3931d68"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () => {
    clearErrors();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });

  };

  const handleSignup = () => {
    clearErrors();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            break;
          default:
            break;
        }
      });  
  };

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut();
  };

  console.log(fire);
  const authListener = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);  
      } else {
        setUser('');
      }
    });
  };

  console.log(fire);
  useEffect(() => {
    authListener();
  }, []);

  return (
    <div classname = "App">
      {user ? (
        <Logout handleLogout={handleLogout}/>
      ) : (
        <Login 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
      
        
    </div>
    );
  };

export default App;