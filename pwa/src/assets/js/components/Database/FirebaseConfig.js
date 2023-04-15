import { initializeApp } from "firebase/app";
import { getStorage, ref} from "firebase/storage";
import { getFirestore, enableIndexedDbPersistence } from "@firebase/firestore";

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

const imgStorage = getStorage(app);

const db = getFirestore(app);


enableIndexedDbPersistence(db).catch( (error) =>{
    if(error.code =='failed-precondition')
    {
        console.log("persistence failed, multiple tabs opened");
    }
    else if(error.code == 'unimplemented')
    {
        console.log("device does not support offline persistence");
    }
    



}




    )
    

// Initialize Cloud Firestore and get a reference to the service
export {db, imgStorage, app};