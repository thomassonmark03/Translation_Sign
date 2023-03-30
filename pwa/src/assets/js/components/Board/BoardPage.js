import React, {useState, useEffect} from 'react'
import Header from '../Design/Header'
import {Route,Routes} from "react-router-dom";
import BoardFilter from './BoardFilter'


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


const BoardPage = (props) =>{

    const boards = props.boards;
    //const states = [...TEST_STATES];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };

    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 

    const filterBoard = (board) =>{
        let matches = 0;
        let lcBoardName = board.id.toLowerCase();
        let lcFilterText = filterText.toLowerCase();


        for(let i = 0; i < filterLength && i < lcBoardName.length; i++)
        {
            if(lcBoardName[i] === lcFilterText[i])
                matches++;
        }

        return lcFilterText === '' || (lcBoardName[0] === lcFilterText[0] && matches >= filterLength - 2);

    };
    const displayBoards = boards.filter(filterBoard);



    return(
        <div>
            <Header></Header>
            <BoardFilter setFilter = {filterSet}/>

            {displayBoards.map( (board) =>{
                
                <img src={board.img}></img>

                
            })}




        </div>



    );




};




export default BoardPage;















