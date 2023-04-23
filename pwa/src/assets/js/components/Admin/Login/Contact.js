import { authApp } from '../../Database/FirebaseConfig'; 
import {getAuth, signInWithCredential, EmailAuthProvider, signInWithEmailAndPassword, signOut, EmailAuthCredential } from 'firebase/auth';
import React, { useState } from 'react';
import AdminHome from '../AdminHome';
import Header from '../../Design/Header';

function Contact() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [loginError, setLoginError] = useState('');
    const [userLogin, setUser] = useState(getAuth().currentUser);


    /*const loginCookie = Cookie.get('loginCookie');
    console.log(loginCookie);
    if(loginCookie != undefined)
    {
        const cookieLogin = async()=>{
            try{
                await signInWithCredential(loginCookie); 
                const loginInfo = getAuth.currentUser;

                setUser(loginInfo);


            } catch(error){
                let errorMessage = error.code;

                //Way to extract error message
                //https://stackoverflow.com/questions/18290599/extract-part-of-the-string
                errorMessage = errorMessage.split('auth/').pop();
                errorMessage = errorMessage.replace('-', ' ');
                setLoginError(errorMessage);
            }
            
        }
        cookieLogin();

    }*/
    

    const submit = async() => {
        try{
            await signInWithEmailAndPassword(authApp,email,password)
            const loginInfo = getAuth().currentUser;
            //EmailAuthProvider(
            setUser(loginInfo);
            //Cookie.set('loginCookie', loginInfo.uid, {expires: 1/24, sameSite:'None', secure:true});


        } catch(error){
            let errorMessage = error.code;

            //Way to extract error message
            //https://stackoverflow.com/questions/18290599/extract-part-of-the-string
            errorMessage = errorMessage.split('auth/').pop();
            errorMessage = errorMessage.replace('-', ' ');
            setLoginError(errorMessage);
        }
    }
    console.log(userLogin);

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


/*<div>
    <label>Success!</label>
    <button onClick={()=>{
        signOut(getAuth())
        console.log(getAuth())
    
        }


    }>Signout</button>
</div>
*/





