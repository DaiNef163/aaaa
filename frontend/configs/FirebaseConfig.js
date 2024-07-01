// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwQA81oEsTxDUPYjvuMPHKMcgwxyFwuCQ",
  authDomain: "travel-app-cdf30.firebaseapp.com",
  projectId: "travel-app-cdf30",
  storageBucket: "travel-app-cdf30.appspot.com",
  messagingSenderId: "226517436498",
  appId: "1:226517436498:web:a471a95325e52caf0cf78b",
  measurementId: "G-2XW2K48FV5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
// const analytics = getAnalytics(app);