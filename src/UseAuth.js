 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcjTemE7T1fMTeT-lsJPWsea65tIezBaU",
  authDomain: "disneylogin-3250c.firebaseapp.com",
  projectId: "disneylogin-3250c",
  storageBucket: "disneylogin-3250c.appspot.com",
  messagingSenderId: "221847729203",
  appId: "1:221847729203:web:655bc8788916e7ebb49f46",
  measurementId: "G-4B2Q7YPS0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app