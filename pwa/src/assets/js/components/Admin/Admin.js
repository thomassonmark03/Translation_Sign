import React from 'react';
import './main.css';
import { useState,useEffect } from "react";
import { db } from '../Database/FirebaseConfig';
import { collection,getDocs, addDoc} from 'firebase/firestore';


function Admin() {

    const stateCollection = collection(db, 'States');


    const [states, setStates] = useState([]);

    const stateGet = async () =>{
        const statesSnapshot = await getDocs(stateCollection);

        try{

            setStates(statesSnapshot.map((doc) => ({...doc.data(), id: doc.id}) ) );
            console.log(states);
            

        }
        catch(error){
            console.log(error);
        }


    }

    useEffect(stateGet, []);
   


    return (
        <div>
            <span>

            </span>


            <span>


            </span>

            <span>


            </span>
        

        
        
        
        
        </div>

    );
}
/*const testAdd = async () =>
    {
        console.log('in add doc');
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: 'Alan',
            middle: 'Madison',
            last: 'Young',
            born: 1998
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

    }

*/
export default Admin;
