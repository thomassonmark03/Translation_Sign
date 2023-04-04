import React, {useState, useEffect} from 'react';
import '../css/main.css';
import LanguagePage from './components/Language/LanguagePage';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'
import Paths from './components/Paths/Paths';




function App() {


    const [language, setLanguage] = useState(Cookies.get('googtrans'));

    const display = ()=>{


        if(language != undefined)
        {
            return [<Paths></Paths>]
            
        }
        else
        {
            return [<LanguagePage></LanguagePage>]
        }

    }

    useEffect(

        () =>{
            toast.info("Alert, this website utilizes cookies");
        }
        
        




    , []);




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

/*\

            <Route path="/texas" element={[<Texas/>]}/>
            <Route path="/oklahoma" element={[<Oklahoma/>]}/>
            <Route path="/contact" element={[<Contact/>]} />
            <Route path="/kansas" element={[<Kansas/>]} />

*/