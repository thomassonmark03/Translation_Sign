import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk1XcEhc4chVn-EMwDUFBCOpZpMdEo8Yw",
  authDomain: "usaceparks.firebaseapp.com",
  databaseURL: "https://usaceparks-default-rtdb.firebaseio.com",
  projectId: "usaceparks",
  storageBucket: "usaceparks.appspot.com",
  messagingSenderId: "413593165272",
  appId: "1:413593165272:web:93d57ac63b76c7eff8a6ad"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);