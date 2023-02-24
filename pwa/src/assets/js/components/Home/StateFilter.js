import React from 'react'
import './StateFilter.css'

const StateFilter = (props) =>{

    const filterChanged = (event) =>{

        props.setFilter(event.target.value);
        
    };


    return(

        <div className='state-filter'>
            <label>Filter States</label>
            <input type='text' onChange={filterChanged} value={props.defaultText}></input>
        </div>

    );



};


export default StateFilter;



