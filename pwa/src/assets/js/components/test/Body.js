import React, { useState,useEffect } from 'react';
import './main.css';
import {Link} from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';


import Cookies from 'js-cookie'

function Body() {

    const [board,setBoard] = useState([]);
    const boardCollectionRef = collection(db,"Board");

    useEffect(() => {
    const getBoard = async() => {
        const data = await getDocs(boardCollectionRef);
        setBoard(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getBoard();
},[boardCollectionRef]);
    
  return (
    <div className="container">
        <button onClick={() => console.log(Cookies.get('googtrans'))}>Get Cookie</button>
        <button onClick={() => console.log(Cookies.remove('googtrans'))}>Remove Cookie</button>
        {board.map((board)=> {
            console.log(board);
            return( 
                <Link to={'/BoardPage'}> 
                    <div className="content1">
                        <h2 >{board.title}</h2>
                        <img alt={board.title} src={board.img}></img>
                    </div>
                </Link>
            )
        })}


    </div>
  );
}

export default Body;
