import {auth} from './FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../css/main.css';
import React, { useState } from 'react';

function Contact() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const submit = async() => {
        const response = await signInWithEmailAndPassword(auth,email,password);
        console.log(response)
    }

    return (
        <>
            <h3>Login Here</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" onChange={(event)=> setPassword(event.target.value)}/>
            <button onClick={submit}>Log In</button>
        </>
    )
}
export default Contact