import React from 'react';
import '../css/main.css';
import logo from '../usacelogo.png'
// import { useState,useEffect } from "react";
// import { db } from './FirebaseConfig';
// import { collection,getDocs} from 'firebase/firestore';
import {Link} from "react-router-dom"

function Body() {

  return (
    <div className="container">
        <Link to="/Texas"> 
            <div className="content1">
                <h2>Texas</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Oklahoma">
            <div className="content2">
                <h2>Oklahoma</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Texas">
            <div className="content3">
                <h2>Kansas</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Texas">
            <div className="content4">
                <h2>Maine</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Texas">
            <div className="content5">
                <h2>Washington</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Texas">
            <div className="content6">
                <h2>Colorado</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>
        <Link to="/Texas">
            <div className="content7">
                <h2>Oregon</h2>
                <img alt='UsaceLogo' src={logo}></img>
            </div>
        </Link>

    </div>
  );
}

export default Body;
