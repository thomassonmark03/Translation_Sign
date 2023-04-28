import React, {useState, useEffect} from 'react'
import {Route,Routes} from "react-router-dom";
import BoardPage from './BoardPage';
import {MemoBoardSingle} from './BoardSingle';


import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';
import { render } from '@testing-library/react';



//Refs: 
// https://ui.dev/react-router-nested-routes


const BoardHub = (props) =>{

    const boardCollection = collection(db, 'States/' + props.stateId+ '/Parks/' + props.parkId + '/Boards');
    const [boards, setBoards] = useState([]);
    let i;

    //Database
    useEffect(() => {
        const getBoard = async() => {
            const data = await getDocs(boardCollection);
            setBoards(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBoard();
    },[]);



    //Renders all the states present in the database.
    const renderBoardsPath = () =>
    {
        let i;
        const boardRoutes = [];
        for(i = 0; i < boards.length; i++)
        {        

            const titleParts = boards[i].title.split(" ");

            let linkTitle = "";
            for (let i = 0; i < titleParts.length; i++)
            {
                linkTitle += titleParts[i];
            }
            boardRoutes.push(<Route path={linkTitle + '/*'} element={<MemoBoardSingle board = {boards[i]}/>}/>) 
            //https://ui.dev/react-router-nested-routes
        }
    
        return boardRoutes;
    }



    return(
        <div>
            <Routes>
                <Route path='' element={<BoardPage boards= {boards}/>}></Route>
                {renderBoardsPath()}
            </Routes>
        </div>



    );




};




export default BoardHub;






















