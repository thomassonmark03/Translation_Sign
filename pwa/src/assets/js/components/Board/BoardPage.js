import React, {useState, useEffect} from 'react';
import Header from '../Design/Header';
import {Route,Routes, Link} from "react-router-dom";
import BoardFilter from './BoardFilter';
import './BoardPage.css';


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


const filterBoard = (board, filterText) =>{
    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 
    let matches = 0;
    let lcBoardName = board.title.toLowerCase();
    let lcFilterText = filterText.toLowerCase();


    for(let i = 0; i < filterLength && i < lcBoardName.length; i++)
    {
        if(lcBoardName[i] === lcFilterText[i])
            matches++;
    }

    return lcFilterText === '' || (lcBoardName[0] === lcFilterText[0] && matches >= filterLength - 2);

};

const BoardPage = (props) =>{

    const boards = props.boards;
    //const states = [...TEST_STATES];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };

    const displayBoards = boards.filter( (board) => {return filterBoard(board, filterText)});



    return(
        <div>
            <Header></Header>
            <BoardFilter setFilter = {filterSet}/>

            <div class='container'>
                {displayBoards.map((board)=> {

                    const titleParts = board.title.split(" ");
                    let linkTitle = "";
                    for (let i = 0; i < titleParts.length; i++)
                    {
                        linkTitle += titleParts[i];
                    }
                    console.log("Here is the link title");
                    console.log(linkTitle);
                    return( 
                            <Link to={'./' + linkTitle}> 
                                <div className="content1">
                                    <h2 translate='no' >{board.title}</h2>
                                    <img alt={board.id} src={board.img}></img>
                                </div>
                            </Link>
                    )
                })}

            </div>


        </div>



    );




};




export default BoardPage;
export {filterBoard};















