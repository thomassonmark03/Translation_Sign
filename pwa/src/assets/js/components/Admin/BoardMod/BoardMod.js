import React from 'react'


import './BoardMod.css'
import {Link} from "react-router-dom"



const BoardMod = (props) =>{
    return(
        <div onClick={() => console.log('BoardMod clicked')}>
            <div className='board'>
                <img alt= {props.name + ' image here'} src={props.boardImage}></img>
                <p>{props.name}</p>

            </div>
        </div>

    )


};



export default BoardMod;







