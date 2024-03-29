import React from 'react'
import './ParkFilter.css'


//Takes input from the user and feedsback to the
//Park page on how to filter the parks.
const ParkFilter = (props) =>{

    const filterChanged = (event) =>{

        props.setFilter(event.target.value);
        
    };


    return(

        <div className='park-filter'>
            <label className="park-filter__label"> Filter Parks</label>
            <input className="park-filter__input" placeholder = 'Enter Park here'type='text' onChange={filterChanged} value={props.defaultText} ></input>
        </div>

    );



};


export default ParkFilter;



