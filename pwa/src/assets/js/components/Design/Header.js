import React, {useState} from "react";
import "./Header.css";
import logo from "./usacelogo.png";
import { getAuth, signOut } from "firebase/auth";
import { Link} from "react-router-dom";
import Cookies from "js-cookie";


//Standard Header for the website.
//It may accept a prop called showLogin
function Header(props) {
    const showLogin = typeof(props.showLogin) === 'boolean'? props.showLogin:true;
    const adminSignOut = () =>{
        signOut(getAuth());
        
    };


    //If the choose language button is selected, remove goog trans cookie and reload the page.
    //This will take you to the language page because the language page always shows up when the
    //googtrans cookie is empty.
    const chooseLanguage = () =>{
        Cookies.remove('googtrans');
        const url = window.location.reload();

    };

    //Display the teamname, the USACE logo(links back to home), text that links to USACE main page, and 
    //choose language.
    //Depending on the programmers choice, the admin login may be displayed or the signout button.
  return (
    <div className="header">
      <div className="teamname">
        <Link to="/">
          <img alt="UsaceLogo" src={logo}></img>
        </Link>
        <div className="split">
          <Link to="/">Park Sign Translator</Link>
          <a href="https://www.usace.army.mil/">US Army Corps of Engineers</a>
        </div>
      </div>
      <button className="header__choose_language" onClick={chooseLanguage}>Choose a language</button>
      <div className="cta">
      {showLogin === true && 
        <Link to="/Admin">Admin Login</Link>
      }
      {showLogin === false&& 
        <Link onClick={adminSignOut} to='/'>Logout</Link>
      }
      </div>
    </div>
  );
}

export default Header;
