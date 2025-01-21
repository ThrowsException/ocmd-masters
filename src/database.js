import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyD5RyhvKwCJ1fkNDm0EzL2D635fhhY9qbU",
  authDomain: "ocmd-1e2a2.firebaseapp.com",
  projectId: "ocmd-1e2a2",
  storageBucket: "ocmd-1e2a2.firebasestorage.app",
  messagingSenderId: "883241503381",
  appId: "1:883241503381:web:b85c84484cefd91c54e99c",
  measurementId: "G-D7QWJ4J3P8",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const store = getFirestore(app);
