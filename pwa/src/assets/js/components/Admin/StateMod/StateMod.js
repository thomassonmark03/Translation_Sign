import React from 'react'


import './StateMod.css'
import {Link} from "react-router-dom"



const StateMod = (props) =>{
    console.log('StateMod was executed');
    console.log(props);
    return(
        <div onClick={() => console.log('Statemod clicked')}>
            <div className='state'>
                <img alt= {props.name + ' image here'} src={props.stateImage}></img>
                <p>{props.name}</p>

            </div>
        </div>

    )


};



export default StateMod;







