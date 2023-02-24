import React, {useState} from 'react'
import Cookies from 'js-cookie';



const LanguagePage = () =>{

    let language = '/en/es';


    const confirmationClick = () =>{
        console.log("here");
        Cookies.set('googtrans', language, {expires: 1, sameSite:'None', secure:true}) 

        const url = window.location.reload();

        

    };

    const testCookie = () =>{
        console.log(Cookies.get('googtrans'));
    };

    const langChange = (event) =>{
        language = event.target.value;
    }

    return(
        <div>
            <select defaultValue={language} onChange={langChange}>
                <option value='/en/en'>English</option>
                <option value='/en/es'>Spanish</option>
                <option value='/en/af'>Afrikaans</option>
                <option value='/en/sq'>Albanian</option>
                <option value='/en/am'>Amharic</option>
                <option value='/en/ar'>Arabic</option>
                <option value='/en/hy'>Armenian</option>
                <option value='/en/as'>Assamese</option>
                <option value='/en/ay'>Aymara</option>
                <option value='/en/az'>Azerbaijani</option>
                <option value='/en/bm'>Bambara</option>
                <option value='/en/eu'>Basque</option>
                <option value='/en/be'>Belarusian</option>
                <option value='/en/bn'>Bengali</option>
                <option value='/en/bho'>Bhojpuri</option>
            </select>
            <button onClick={confirmationClick}>Confirm</button>
            <button onClick={testCookie}>test</button>

        </div>



    );
    




};


export default  LanguagePage;









