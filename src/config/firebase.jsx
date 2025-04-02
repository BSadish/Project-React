// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1eJN8wqXKNGegJcu0T_kA3iGdZ_6Bj6g",
  authDomain: "vite-contract-c0b21.firebaseapp.com",
  projectId: "vite-contract-c0b21",
  storageBucket: "vite-contract-c0b21.firebasestorage.app",
  messagingSenderId: "156092229498",
  appId: "1:156092229498:web:eebd85ccc6dbc9eeacd8c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);