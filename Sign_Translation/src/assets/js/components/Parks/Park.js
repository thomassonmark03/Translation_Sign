import React from 'react';


import {Link} from "react-router-dom";
import './Park.css';


//Parks component
//This will show the parks image, name.
//It is also clickable such that it will take you to its park page.
const Park = (props) =>{
    return(
        <Link translate='no' to={props.route}>
            <div className='park'>
                <img alt= {props.name + ' image here'} src={props.parkImage}></img>
                <p>{props.name}</p>

            </div>
        </Link>


    )


};



export default Park;
