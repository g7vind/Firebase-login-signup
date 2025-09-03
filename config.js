// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYneb7heYJU8D6WranVq26jRCm33KTEFA",
  authDomain: "tricolor-trends.firebaseapp.com",
  projectId: "tricolor-trends",
  storageBucket: "tricolor-trends.firebasestorage.app",
  messagingSenderId: "320568389289",
  appId: "1:320568389289:web:22c9cce20c2a499a6a43b8",
  measurementId: "G-P5YKMPYK5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
