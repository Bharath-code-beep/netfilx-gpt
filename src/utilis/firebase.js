// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTfcVfiCUjwX5AsQvbXI1VPllBxHmSxSk",
  authDomain: "netfixgpt-3fdd7.firebaseapp.com",
  projectId: "netfixgpt-3fdd7",
  storageBucket: "netfixgpt-3fdd7.appspot.com",
  messagingSenderId: "89437895572",
  appId: "1:89437895572:web:60c63011798524401e6d81",
  measurementId: "G-ZZ7YX489H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
