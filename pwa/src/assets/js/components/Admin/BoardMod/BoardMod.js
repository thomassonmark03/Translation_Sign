import React, {useState} from 'react';
import BoardForm from './BoardForm';

import './BoardMod.css';
import {Link} from "react-router-dom";



const BoardMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const board_name = props.name;
    const board_image = props.boardImage;

    const editBoard= () =>{

        if(selected == true)
        {
            setSelected(false);

        }
        else
        {
            setSelected(true);
            props.onCallPark(board_name);
        }


    };


    const updateBoard = (newBoardObj) =>{
    
         props.toUploadPark(board_name, newBoardObj);
    }

    let editMenu = "";

    if(selected)
    {
        editMenu =  <div>
                        <BoardForm name={board_name} image={board_image} toStateUpdate={updateBoard}></BoardForm>
                    </div>;
            
    }

    return(
        <div>
            <div onClick={editBoard} className={`board ${selected ? "board_selected":"board_not_selected"} `}>
                <img alt= {board_name + ' image here'} src={board_image}></img>
                <p>{board_name}</p>

            </div>
            {editMenu}
        </div>

    )


};



export default BoardMod;






