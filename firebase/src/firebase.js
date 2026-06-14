// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "first-project-b586b.firebaseapp.com",
  projectId: "first-project-b586b",
  storageBucket: "first-project-b586b.firebasestorage.app",
  messagingSenderId: "119186378472",
  appId: "1:119186378472:web:9ae5417614c855b3a7835d",
  measurementId: "G-47XFXD1DSJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
