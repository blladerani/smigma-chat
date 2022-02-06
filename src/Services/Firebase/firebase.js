// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrAAP_1b4m6byBxJ1QDl00a6jutxWZTR0",
  authDomain: "smigma-chat.firebaseapp.com",
  projectId: "smigma-chat",
  storageBucket: "smigma-chat.appspot.com",
  messagingSenderId: "681879802093",
  appId: "1:681879802093:web:6569810f1478a35e57bce4",
  measurementId: "G-PWDZ22PNLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const analytics = getAnalytics(app);
const db = getFirestore();

export { auth, provider };
export default db;
