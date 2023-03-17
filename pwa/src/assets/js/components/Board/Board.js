import React from 'react';
import './Board.css'




const Board = (props) =>{


    return(

        <div className=''>

            
            <h2>{props.title}</h2>
            <div className='boardBody'>
                <img alt= {props.title + ' missing!'} src={props.image} className='boardImage'></img>
                <p className='boardText'>{props.enText}</p>
            </div>
            
            
        </div>




    );







};




export default Board;