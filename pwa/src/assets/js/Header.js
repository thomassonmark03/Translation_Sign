import React from 'react';
import '../css/main.css';
import logo from '../usacelogo.png'

function Header() {
  return (
    <div className="header">
        <div className="teamname">
          <a href='https://www.usace.army.mil/'>
            <img alt='UsaceLogo' src={logo}></img>
          </a>
            <div className="split">
                <a href='./index.html'>Park Sign Translator</a>
                <a href='https://www.usace.army.mil/'>US Army Corps of Engineers</a>
            </div>
         </div>
        <div className="cta">
            <a  href='./Contact'>Admin Login</a>
        </div>
    </div>  
  );
}

export default Header;
