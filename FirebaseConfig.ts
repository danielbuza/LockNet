// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-trebQNTMQAf9G0XqzHyHzcl_qSuR6Dc",
  authDomain: "netlock-16a18.firebaseapp.com",
  projectId: "netlock-16a18",
  storageBucket: "netlock-16a18.appspot.com",
  messagingSenderId: "110291491411",
  appId: "1:110291491411:web:1d4d853d11dd223e89c4a6",
  measurementId: "G-V5WJ0Z8TLG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
