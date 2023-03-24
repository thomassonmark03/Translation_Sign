import React from 'react'


import './ParkMod.css'
import {Link} from "react-router-dom"



const ParkMod = (props) =>{
    return(
        <div onClick={() => console.log('ParkMod clicked')}>
            <div className='park'>
                <img alt= {props.name + ' image here'} src={props.parkImage}></img>
                <p>{props.name}</p>

            </div>
        </div>

    )


};



export default ParkMod;







