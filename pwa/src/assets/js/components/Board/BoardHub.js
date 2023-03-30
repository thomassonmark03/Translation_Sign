import React, {useState, useEffect} from 'react'
import {Route,Routes, useLocation} from "react-router-dom";
import BoardPage from './BoardSingle';


import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';

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

    const boardCollection = collection(db, 'States/' + props.stateName + '/Parks/' + props.parkName + '/Boards');
    const [boards, setBoards] = useState([]);

    //Database
    useEffect(() => {
        const getBoard = async() => {
            const data = await getDocs(boardCollection);
            setBoards(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBoard();
    },[]);



    //Renders all the states present in the database.
    /*const renderBoardsPath = () =>
    {
        let i;
        const boardRoutes = [];
        for(i = 0; i < boards.length; i++)
        {
            boardRoutes.push(<Route path={boards[i].id + '/*'} element={<BoardPage boards = {boards}/>}/>) 
            //https://ui.dev/react-router-nested-routes
        }
    
        return boardRoutes;
    }*/


    return(
        <div>
            <Routes>
                <Route path='' element={<BoardPage boards= {boards}/>}></Route>
            </Routes>
        </div>



    );




};




export default BoardHub;






















