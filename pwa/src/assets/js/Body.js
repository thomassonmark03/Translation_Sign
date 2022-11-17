import React from 'react';
import '../css/main.css';
import logo from '../usacelogo.png'
import { useState,useEffect } from "react";
import { db } from './FirebaseConfig';
import { collection,getDocs} from 'firebase/firestore';

function Body() {
    const [users,setUsers] = useState([]);
    const usersColRef = collection(db,"parks");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersColRef);
            console.log(data);
        };
        getUsers();
    },[usersColRef]);
    

  return (
    <div className="container">
        <a href='https://www.usace.army.mil/'>
            <div className="content1">
                <h2>Texas</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </a>
            <div className="content2">
                <h2>Oklahoma</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div className="content3">
                <h2>Kansas</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div className="content4">
                <h2>Maine</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div className="content5">
                <h2>Washington</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div className="content6">
                <h2>Colorado</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div className="content7">
                <h2>Oregon</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
            <div> {users.map((user)=> {
                return (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
                )
            })}</div>
        </div>
  );
}

export default Body;
