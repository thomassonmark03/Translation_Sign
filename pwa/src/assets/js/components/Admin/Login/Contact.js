import { authApp } from '../../Database/FirebaseConfig'; 
import {getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Cookie from 'js-cookie'
import React, { useState } from 'react';
import AdminHome from '../AdminHome';

function Contact() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [loginError, setLoginError] = useState('');
    const [userLogin, setUser] = useState(getAuth().currentUser);

    const submit = async() => {
        try{
            //const response = await signInWithEmailAndPassword(authApp,email,password);
            setUser(getAuth());


        } catch(error){
            let errorMessage = error.code;

            //Way to extract error message
            //https://stackoverflow.com/questions/18290599/extract-part-of-the-string
            errorMessage = errorMessage.split('auth/').pop();
            errorMessage = errorMessage.replace('-', ' ');
            setLoginError(errorMessage);
        }
    }


    return (
        <>
            {userLogin === null && <div>
            <h3>Login Here</h3>
            <label for="username">Username</label>
            <input type="text" placeholder="Email" onChange={(event)=> setEmail(event.target.value)}/>
            <label for="password">Password</label>
            <input type="password" placeholder="Password" onChange={(event)=> setPassword(event.target.value)}/>
            <label style={{color: 'red'}}>{loginError}</label>
            <button onClick={submit}>Log In</button>
            </div>
            }
            {userLogin !== null &&
                <AdminHome/>
            }


        </> 
    )
}
export default Contact


/*<div>
    <label>Success!</label>
    <button onClick={()=>{
        signOut(getAuth())
        console.log(getAuth())
    
        }


    }>Signout</button>
</div>
*/





