// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "REDACTED<<=",
  authDomain: "first-project-b586b.firebaseapp.com",
  projectId: "first-project-b586b",
  storageBucket: "first-project-b586b.firebasestorage.app",
  messagingSenderId: "119186378472",
  appId: "1:119186378472:web:47b8a1bc143776daa7835d",
  measurementId: "G-6GLKWRRQHZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);