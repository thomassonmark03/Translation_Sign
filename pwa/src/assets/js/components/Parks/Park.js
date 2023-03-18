import React from 'react'


import {Link} from "react-router-dom"



const Park = (props) =>{
    return(
        <Link translate='no' to={props.route}>
            <div className='state'>
                <img alt= {props.name + ' image here'} src={props.parkImage}></img>
                <p>{props.name}</p>

            </div>
        </Link>


    )


};



export default Park;
