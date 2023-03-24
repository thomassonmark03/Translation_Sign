import React from 'react'


import './Home.css'
import {Link} from "react-router-dom"



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







