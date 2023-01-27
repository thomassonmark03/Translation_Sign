import React from 'react';
import '../css/main.css';
import logo from '../usacelogo.png'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <div className="teamname">
          <a href='https://www.usace.army.mil/'>
            <img alt='UsaceLogo' src={logo}></img>
          </a>
            <div className="split">
                <Link to="/">Park Sign Translator</Link>
                <a href='https://www.usace.army.mil/'>US Army Corps of Engineers</a>
            </div>
         </div>
        <div className="cta">
            <Link to="/contact">Admin Login</Link> 
        </div>
    </div>  
  );
}

export default Header;
