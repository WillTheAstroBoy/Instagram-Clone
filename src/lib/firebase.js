

const config = {
    apiKey: "AIzaSyBi7XllZSTEMEzZHGJn16F2KmNmlHOST3E",
    authDomain: "instagram-ca376.firebaseapp.com",
    projectId: "instagram-ca376",
    storageBucket: "instagram-ca376.appspot.com",
    messagingSenderId: "16878360626",
    appId: "1:16878360626:web:da9bec5e11235f4aea442b"
};
  
const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };