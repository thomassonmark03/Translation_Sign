import React, {useState} from 'react';
import '../css/main.css';
import {PrivateRoute, Route,Routes} from "react-router-dom";
import Home from './components/Home/Home'
import Body from "./components/test/Body";
import LanguagePage from './components/Language/LanguagePage';
import Contact from './components/Admin/Contact';
import Cookies from 'js-cookie'
import Paths from './components/Paths/Paths';


function App() {
    //Debug

    const [language, setLanguage] = useState(Cookies.get('googtrans'));

    const display = ()=>{

        console.log('I was executed');

        if(language != undefined)
        {
            return [<Paths></Paths>]
            
        }
        else
        {
            return [<LanguagePage></LanguagePage>]
        }

    }



    return(
        <div>
            {display()}
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