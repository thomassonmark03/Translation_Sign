import React from 'react'
import './ParkFilter.css'

const StateFilter = (props) =>{

    const filterChanged = (event) =>{

        props.setFilter(event.target.value);
        
    };


    return(

        <div className='park-filter'>
            <label className="park-filter__label"> Filter States</label>
            <input className="park-filter__input" placeholder = 'Enter Park here'type='text' onChange={filterChanged} value={props.defaultText} ></input>
        </div>

    );



};


export default StateFilter;



