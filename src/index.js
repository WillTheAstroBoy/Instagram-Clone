import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from "./context/firebase";
import  { GlobalStyle } from "./global-style";
import { firebase, FieldValue } from "./lib/firebase";
//import { seedDatabase } from "./seed";

/*
const config = {
  apiKey: "AIzaSyBi7XllZSTEMEzZHGJn16F2KmNmlHOST3E",
  authDomain: "instagram-ca376.firebaseapp.com",
  projectId: "instagram-ca376",
  storageBucket: "instagram-ca376.appspot.com",
  messagingSenderId: "16878360626",
  appId: "1:16878360626:web:da9bec5e11235f4aea442b"
};

const firebase = window.firebase.initializeApp(config);*/
//seedDatabase(firebase);

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
