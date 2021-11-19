// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyApCrYr-NvWuSiLkOoIrygI85WStV5bRcg",
  authDomain: "pocket-idea.firebaseapp.com",
  projectId: "pocket-idea",
  storageBucket: "pocket-idea.appspot.com",
  messagingSenderId: "642347362905",
  appId: "1:642347362905:web:eefb9f8b5fa8e142ee1f48",
  measurementId: "G-L8GZ9YVSPV"

};
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider}

