import React, {useState} from "react";
import "./Header.css";
import logo from "./usacelogo.png";
import { getAuth, signOut } from "firebase/auth";
import { Link} from "react-router-dom";
import Cookies from "js-cookie";

function Header(props) {
    const showLogin = typeof(props.showLogin) === 'boolean'? props.showLogin:false;
    const adminSignOut = () =>{
        signOut(getAuth());
        
    };


    const chooseLanguage = () =>{
        Cookies.remove('googtrans');
        const url = window.location.reload();

    };
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
      {showLogin === false && 
        <Link to="/Admin">Admin Login</Link>
      }
      {showLogin === true && 
        <Link onClick={adminSignOut} to='/'>Logout</Link>
      }
      </div>
    </div>
  );
}

export default Header;
