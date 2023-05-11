import React, {useState, useEffect} from 'react';
import Header from '../Design/Header';
import {Link} from "react-router-dom";
import BackButton from '../Design/BackButton';
import BoardFilter from './BoardFilter';
import './BoardPage.css';




//Refs: 
// https://ui.dev/react-router-nested-routes

//Handles how to filter the boards. Super simple, just check to see if the
//filter text matches half text in the board title. Note, positioning of the
//text matters.
const filterBoard = (board, filterText) =>{
    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 
    let matches = 0;
    //Puts both names to lowercase to allow for case independant comparison.
    let lcBoardName = board.title.toLowerCase();
    let lcFilterText = filterText.toLowerCase();


    for(let i = 0; i < filterLength && i < lcBoardName.length; i++)
    {
        if(lcBoardName[i] === lcFilterText[i])
            matches++;
    }

    //If the filter text is empty, display all the states.
    //Otherwise, the matches are considered as well as the first letter of the board.
    return lcFilterText === '' || (lcBoardName[0] === lcFilterText[0] && matches >= filterLength - 2);

};

//Shows the general board page with all the boards.
const BoardPage = (props) =>{

    //Get the boards from the board hub.
    const boards = props.boards;
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };

    //From the boards in the board hub, filter down to the ones specified by the filter text.
    const displayBoards = boards.filter( (board) => {return filterBoard(board, filterText)});



    //Show the header, a back button, the board filter, and the boards after filtering.
    return(
        <div>
            <Header></Header>
            <div style={{background: '#24252a'}}>
                <BackButton text='Return to Park Hub'></BackButton>
            </div>
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















