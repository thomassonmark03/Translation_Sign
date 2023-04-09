import React, {useState, useEffect} from 'react';
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
            props.onDeselectBoard();
        }
        else
        {
            props.onCallBoard(board_name);
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

    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected]);

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






