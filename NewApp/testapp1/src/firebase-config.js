// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrUiQBSR5yLBq8lXj6zC_RQiG4bHPlEI",
  authDomain: "sweprojtest1.firebaseapp.com",
  projectId: "sweprojtest1",
  storageBucket: "sweprojtest1.appspot.com",
  messagingSenderId: "986646725400",
  appId: "1:986646725400:web:3b3b14465deb4c1b2d146d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();