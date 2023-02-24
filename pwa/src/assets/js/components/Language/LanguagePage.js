import React, {useState} from 'react'
import Cookies from 'js-cookie';



const LanguagePage = () =>{

    let language = 'English';


    const confirmationClick = () =>{
        console.log("here");
        Cookies.set('pv_lang', language, {expires: 1, sameSite:'Strict'}) 

        const url = window.location.reload();

        

    };

    const testCookie = () =>{
        console.log(Cookies.get('pv_lang'));
    };

    const langChange = (event) =>{
        language = event.target.value;
    }

    return(
        <div>
            <select onChange={langChange}>
                <option value='English'>English</option>
                <option value='Spanish'>Spanish</option>
            </select>
            <button onClick={confirmationClick}>Confirm</button>
            <button onClick={testCookie}>test</button>

        </div>



    );
    




};


export default  LanguagePage;









