import { authApp } from '../../Database/FirebaseConfig'; 
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import React, { useState } from 'react';
import AdminHome from '../AdminHome';
import Header from '../../Design/Header';

//Page for handling the login features.
function Contact() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [loginError, setLoginError] = useState('');
    const [userLogin, setUser] = useState(getAuth().currentUser);


    

    //On submit, attempt to login. Display errors if they occur under the password box.
    const submit = async() => {
        try{
            await signInWithEmailAndPassword(authApp,email,password)
            const loginInfo = getAuth().currentUser;
            setUser(loginInfo);


        } catch(error){
            let errorMessage = error.code;

            errorMessage = errorMessage.split('auth/').pop();
            errorMessage = errorMessage.replace('-', ' ');
            setLoginError(errorMessage);
        }
    }


    //Shows the login page with username, password, and submit button.
    //If the user is successfully logged in, which is handled by firebase, you may the admin home page.
    return (
        <>
            {userLogin === null && <div>
            <Header></Header>
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

