import React from 'react'


import Header from '../Design/Header'
import './Home.css'



const State = (props) =>{
    return(

        <div className='state'>
            <img alt= {props.name + ' image here'} src={props.stateImage}></img>
            <p>{props.name}</p>

        </div>


    )


};



export default State;







