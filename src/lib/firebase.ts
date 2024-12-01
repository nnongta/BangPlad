// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Rv7zOBWW1EEvAM6XczBmi7eJFIWpcpA",
  authDomain: "bangplad-5a6fa.firebaseapp.com",
  projectId: "bangplad-5a6fa",
  storageBucket: "bangplad-5a6fa.firebasestorage.app",
  messagingSenderId: "679454900258",
  appId: "1:679454900258:web:98595acfdcc56e567a8a7b",
  measurementId: "G-BWXLM8Y2ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
