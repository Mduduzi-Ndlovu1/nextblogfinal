// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-blog-42e37.firebaseapp.com",
  projectId: "next-blog-42e37",
  storageBucket: "next-blog-42e37.firebasestorage.app",
  messagingSenderId: "672448765972",
  appId: "1:672448765972:web:93c9365b7f2963f9e30701"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);