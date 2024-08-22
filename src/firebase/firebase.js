// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfsuvqhadXbbbiO5kH9EhkCMJM48X9zc4",
  authDomain: "e-commerce-audio.firebaseapp.com",
  projectId: "e-commerce-audio",
  storageBucket: "e-commerce-audio.appspot.com",
  messagingSenderId: "822446339349",
  appId: "1:822446339349:web:7df4fb8e3e4479101aa51c",
  measurementId: "G-03FN569F9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
