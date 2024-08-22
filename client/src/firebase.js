// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-c5cde.firebaseapp.com",
  projectId: "mern-c5cde",
  storageBucket: "mern-c5cde.appspot.com",
  messagingSenderId: "1092730224684",
  appId: "1:1092730224684:web:06cf77567c58b8be941189",
  signInFlow: "popup",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
