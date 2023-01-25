// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD_RFUgDLnMEdkXZyJ98O5NG8ybmioy64E",
  authDomain: "chatapp-f7430.firebaseapp.com",
  projectId: "chatapp-f7430",
  storageBucket: "chatapp-f7430.appspot.com",
  messagingSenderId: "772618949818",
  appId: "1:772618949818:web:d81fcc2c518753f64f5e83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db= getFirestore()