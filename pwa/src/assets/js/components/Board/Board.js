import React, {useState} from 'react';
import './Board.css'






const Board = (props) =>{

    const arrEnText = props.enText.split('\n');

    return(

        <div className=''>

            
            <h2 className='boardTitle'>{props.title}</h2>
            <div className='boardBody'>
                <img alt= {props.title + ' missing!'} src={props.image} className='boardImage'></img>
                <div className='boardText'>
                {arrEnText.map( (text) => {

                        return (
                            [<br></br>,
                            <p >{text}</p>
                            ]
                        );

                    })
                }
                </div>
            </div>
            
            
        </div>




    );







};



//<p className='boardText'>{props.enText}</p>

export default Board;