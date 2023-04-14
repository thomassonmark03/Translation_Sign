import React, {useState, useEffect} from 'react';
import BoardForm from './BoardForm';
import DeleteButton from '../Delete/DeleteButton';
import Qrgeneration from './QR/Qrgeneration';

import './BoardMod.css';
import {Link} from "react-router-dom";



const BoardMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const board_name = props.boardName;
    const board_id = props.boardId;
    const board_image = props.boardImage;
    const board_text = props.boardEngText;

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


    const updateBoard = (newBoardObj, imageFile) =>{
    
         props.toUploadBoard(board_id, newBoardObj, imageFile, "update");
    }

    const deleteBoard = () =>{

        props.toDeleteBoard(board_id);
    }

    let editMenu = "";

    if(selected)
    {
        editMenu =  <div>
                        <BoardForm toBoardUpdate={updateBoard} buttonUploadName = "Update"></BoardForm>
                        <Qrgeneration url={props.url}></Qrgeneration>
                        <DeleteButton delete = {deleteBoard} name={board_name} typeName ={'Board'}></DeleteButton>
                    </div>;
            
    }

    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected]);

    return(
        <div>
            <div onClick={editBoard} className={`board ${selected ? "board_selected":"board_not_selected"} `}>
                <img alt= {board_name + ' image here'} src={board_image}></img>
                <p>{board_name}</p>
                <p style={{font: 12,background: 'orange'}}>{board_text}</p>

            </div>
            {editMenu}
        </div>

    )


};



export default BoardMod;






