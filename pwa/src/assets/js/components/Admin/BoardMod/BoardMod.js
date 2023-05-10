import React, {useState, useEffect} from 'react';
import BoardForm from './BoardForm';
import DeleteButton from '../Delete/DeleteButton';
import Qrgeneration from './QR/Qrgeneration';

import './BoardMod.css';
import {Link} from "react-router-dom";



//Component that holds all the modifications that can be done to a board.
//Boards can be edited in name, image, and text. Id is consant.
//Modifying a board takes space, so this is hidden until it is selected.
const BoardMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const board_name = props.boardName;
    const board_id = props.boardId;
    const board_image = props.boardImage;
    const board_text = props.boardEngText;

    //When the board is selected, display what you can edit on the board. This
    //board will inform the admin(or its parent) it has been selected.
    const editBoard= () =>{

        if(selected == true)
        {
            props.onDeselectBoard();
        }
        else
        {
            props.onCallBoard(board_id);
        }


    };


    //From the board form, an update request is sent. The board ID is attached as well
    //to allow the update feature to find where the file is in the database, its path.
    const updateBoard = (newBoardObj, imageFile) =>{
    
         props.toUploadBoard(board_id, newBoardObj, imageFile, "update");
    }




    //A delete request is sent, requiring the board id to help find the path to delete it.
    const deleteBoard = () =>{

        props.toDeleteBoard(board_id);
    }

    let editMenu = "";

    //Display the board form, the QR code when requested, and a delete button when selected.
    if(selected)
    {
        editMenu =  <div>
                        <BoardForm toBoardUpdate={updateBoard} buttonUploadName = "Update"></BoardForm>
                        <Qrgeneration url={props.url}></Qrgeneration>
                        <DeleteButton delete = {deleteBoard} name={board_name} typeName ={'Board'}></DeleteButton>
                    </div>;
            
    }

    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    //Watches the props selected variable, controlled by the parent. If it changes, change with it.
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected]);


    //Display the board itself as well as the board form, the QR code when requested, and a delete button when selected.
    return(
        <div>
            <div onClick={editBoard} className={`board ${selected ? "board_selected":"board_not_selected"} `}>
                <img alt= {board_name + ' image here'} src={board_image}></img>
                <h1>{board_name}</h1>
                <div style={{font: 12,background: 'orange'}}>{board_text}</div>

            </div>
            {editMenu}
        </div>

    )


};



export default BoardMod;






