import React, {useState} from "react";
import "./main.css";
import logo from "./usacelogo.png";
import { app } from "../Database/FirebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { Link} from "react-router-dom";

function Header(props) {
    const showLogin = typeof(props.showLogin) === 'boolean'? props.showLogin:false;
    const adminSignOut = () =>{
        signOut(getAuth());
        
    }
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
      {showLogin === false && <div className="cta">
        <Link to="/Admin">Admin Login</Link>
      </div>
      }
      {showLogin === true && <div className="cta">
        <Link onClick={adminSignOut} to='/'>Logout</Link>
      </div>
      }
    </div>
  );
}

export default Header;
