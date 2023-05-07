import React, {useState, useEffect} from 'react';
import '../css/main.css';
import LanguagePage from './components/Language/LanguagePage';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import Paths from './components/Paths/Paths';



//Root webpage
function App() {


    const [language, setLanguage] = useState(Cookies.get('googtrans'));
    console.log(language);

    const display = ()=>{


        //If the googtrans cookie is undefined, show the language page.
        //Otherwise, show what path you are on.
        if(language != undefined)
        {
            return [<Paths></Paths>]
            
        }
        else
        {
            return [<LanguagePage></LanguagePage>]
        }

    }
   
    //Sets the langugage variable once, unless the googtrans cookie changes.
    useEffect(

        () =>{
            setLanguage(Cookies.get('googtrans'));
        }
        
        




    , Cookies.get('googtrans'));


    //Popup that alerts the users that cookies are used on this website.
    useEffect(

        () =>{
            toast.info("Alert, this website utilizes cookies");
        }
        
        




    , []);



    //Handles displaying the language page or paths, as well as the popup.
    return(
        <div>
            {display()}
            <ToastContainer
                position='bottom-center' 
                theme='dark' 
            
            
            />


        </div>
    )
    
    

}
export default App
