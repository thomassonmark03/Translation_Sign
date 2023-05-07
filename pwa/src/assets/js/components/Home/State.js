import React from 'react'


import './State.css'
import {Link} from "react-router-dom"


//State component. It will display the image, name, and is clickable. 
const State = (props) =>{
    return(
        <Link to={props.route}>
            <div translate= 'no' className='state'>
                <img alt= {props.name + ' image here'} src={props.stateImage}></img>
                <p>{props.name}</p>

            </div>
        </Link>


    )


};



export default State;







