import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7rbT-_XC8s4IQXkIe8FcGsQbli9DSqpg",
  authDomain: "usacetranslation.firebaseapp.com",
  projectId: "usacetranslation",
  storageBucket: "usacetranslation.appspot.com",
  messagingSenderId: "329148098497",
  appId: "1:329148098497:web:a64d7f097de6d43f943140"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);