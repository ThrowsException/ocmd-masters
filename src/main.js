// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5RyhvKwCJ1fkNDm0EzL2D635fhhY9qbU",
  authDomain: "ocmd-1e2a2.firebaseapp.com",
  projectId: "ocmd-1e2a2",
  storageBucket: "ocmd-1e2a2.firebasestorage.app",
  messagingSenderId: "883241503381",
  appId: "1:883241503381:web:b85c84484cefd91c54e99c",
  measurementId: "G-D7QWJ4J3P8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
