import React, {useState, useEffect} from 'react'
import {Route,Routes} from "react-router-dom";
import BoardPage from './BoardPage';
import {MemoBoardSingle} from './BoardSingle';


import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';



//Refs: 
// https://ui.dev/react-router-nested-routes

//This handles what to display on the webpage for the boards. There is a default homepage
//as well as subroutes to read board text.
const BoardHub = (props) =>{


    const boardCollection = collection(db, 'States/' + props.stateId+ '/Parks/' + props.parkId + '/Boards');
    const [boards, setBoards] = useState([]);

    //Database
    //Gets the boards from the database along with all their parameters.
    useEffect(() => {
        const getBoard = async() => {
            const data = await getDocs(boardCollection);
            setBoards(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getBoard();
    },[]);



    //https://ui.dev/react-router-nested-routes
    //Renders all the states present in the database.
    //Each board object from the database will generate a subroute lead by its own title.
    const renderBoardsPath = () =>
    {
        let i;
        const boardRoutes = [];
        for(i = 0; i < boards.length; i++)
        {        
            //Gets rid of any spaces and remerges the board title back together.
            const titleParts = boards[i].title.split(" ");
            let linkTitle = "";
            for (let i = 0; i < titleParts.length; i++)
            {
                linkTitle += titleParts[i];
            }

            boardRoutes.push(<Route path={linkTitle + '/*'} element={<MemoBoardSingle board = {boards[i]}/>}/>) 
        }
    
        return boardRoutes;
    }


    //Either display the board hub home page if a board is not in the path 
    //or the board page with its english text and title if there is a board in the path of
    //the path name.
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






















