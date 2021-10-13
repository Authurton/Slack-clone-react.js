// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
// import { auth } from "firebase/app";
// import "firebase/auth";

// import "firebase/storage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import "firebase/compat/database";





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMOt36QdXbUAPoTDFQFUKf7tL1nXz5IE",
  authDomain: "react-slack-clone-cb284.firebaseapp.com",
  projectId: "react-slack-clone-cb284",
  storageBucket: "react-slack-clone-cb284.appspot.com",
  messagingSenderId: "737689744478",
  appId: "1:737689744478:web:e7cf43f6a9703f6aee30cf",
  measurementId: "G-4S183KX1S6",
  databaseURL: "https://react-slack-clone-cb284-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = app.firestore();

firebase.initializeApp(firebaseConfig);
export default firebase;