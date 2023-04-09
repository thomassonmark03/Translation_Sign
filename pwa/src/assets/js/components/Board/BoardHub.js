import React, {useState, useEffect} from 'react'
import {Route,Routes, useLocation} from "react-router-dom";
import BoardPage from './BoardPage';
import BoardSingle from './BoardSingle';


import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';
import { render } from '@testing-library/react';

/*
const TEST_PARKS= [

    {
        name: 'Texas',
        description: 'Big Texas',
        image: TexasPic,
        route: './test'
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        image: CaliforniaPic,
        route: './test'
    }


];
*/


//Refs: 
// https://ui.dev/react-router-nested-routes


const BoardHub = (props) =>{

    const boardCollection = collection(db, 'States/' + props.stateId+ '/Parks/' + props.parkId + '/Boards');
    const [boards, setBoards] = useState([]);

    //console.log('States/' + props.stateName + '/Parks/' + props.parkName + '/Boards');

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
            let linkTitle = titleParts[0];
            if(titleParts[1] !== undefined)
                linkTitle += titleParts[1]; 
            boardRoutes.push(<Route path={linkTitle + '/*'} element={<BoardSingle board = {boards[i]}/>}/>) 
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






















