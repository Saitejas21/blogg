// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogg-73f0a.firebaseapp.com",
  projectId: "blogg-73f0a",
  storageBucket: "blogg-73f0a.appspot.com",
  messagingSenderId: "662723842691",
  appId: "1:662723842691:web:11ab615d2e625109dc81b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);