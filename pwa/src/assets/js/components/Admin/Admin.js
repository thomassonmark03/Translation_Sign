import React from 'react';
import './main.css';
import { useState,useEffect } from "react";
import { db } from '../Database/FirebaseConfig';
import { collection,getDocs, addDoc} from 'firebase/firestore';

function Admin() {

    const testAdd = async () =>
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

    const testGet = async () =>{
        const querySnapshot = await getDocs(collection(db, "Board"));
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });

    }


    //useEffect(testAdd, []);

    useEffect(testGet, []);
   


    return (
      <div><p>Admin Page</p></div>
    );
}

export default Admin;
