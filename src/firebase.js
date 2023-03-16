import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKShJq3gqeF40DRb19fZZcn1n5BTG5QTA",
  authDomain: "teste-abba5.firebaseapp.com",
  projectId: "teste-abba5",
  storageBucket: "teste-abba5.appspot.com",
  messagingSenderId: "783805004920",
  appId: "1:783805004920:web:bb57853635d86b0785018d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
