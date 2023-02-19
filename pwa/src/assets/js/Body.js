import React, { useState,useEffect } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom"
import { collection,getDocs } from "firebase/firestore";
import { db } from './FirebaseConfig';
function Body() {
    const [board,setBoard] = useState([]);
    const boardCollectionRef = collection(db,"Board");

    useEffect(() => {
    const getBoard = async() => {
        const data = await getDocs(boardCollectionRef);
        setBoard(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getBoard();
},[]);
    
  return (
    <div className="container">
        {board.map((board)=> {
            console.log(board);
            return( 
                <Link to={board.id}> 
                    <div className="content1">
                        <h2>{board.title}</h2>
                        <img alt={board.title} src={board.img}></img>
                    </div>
                </Link>
            )
        })}

    </div>
  );
}

export default Body;
