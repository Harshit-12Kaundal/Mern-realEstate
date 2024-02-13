// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-63d00.firebaseapp.com",
  projectId: "mern-estate-63d00",
  storageBucket: "mern-estate-63d00.appspot.com",
  messagingSenderId: "916518887313",
  appId: "1:916518887313:web:b94b180fe16399aab90430"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);