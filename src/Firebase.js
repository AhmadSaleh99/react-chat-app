import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGv8nmydx9nBtfCJry7FjFQ3064pruubo",
  authDomain: "chat-e051c.firebaseapp.com",
  projectId: "chat-e051c",
  storageBucket: "chat-e051c.appspot.com",
  messagingSenderId: "861353713356",
  appId: "1:861353713356:web:8bfbdae4a834b10b752c69",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore();
