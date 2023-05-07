import React from 'react'
import './StateFilter.css'



//Simple component that takes in input from the user and passes it back
//to the Home page to tell it what states to filter out.
const StateFilter = (props) =>{

    const filterChanged = (event) =>{

        props.setFilter(event.target.value);
        
    };


    return(

        <div className='state-filter'>
            <label className="state-filter__label">Filter States</label>
            <input className="state-filter__input" placeholder = 'Enter State here'type='text' onChange={filterChanged} value={props.defaultText} ></input>
        </div>

    );



};


export default StateFilter;



