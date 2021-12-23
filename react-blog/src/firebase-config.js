// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBqdPry0wU3mEXKU4fbbBETZ0ChMHm7br0",
  authDomain: "fir-blog-e0c80.firebaseapp.com",
  projectId: "fir-blog-e0c80",
  storageBucket: "fir-blog-e0c80.appspot.com",
  messagingSenderId: "779133500047",
  appId: "1:779133500047:web:898d08c583652d80914efa",
  measurementId: "G-98XRD0JWW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
