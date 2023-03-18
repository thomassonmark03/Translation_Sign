import React from 'react'
import './BoardFilter.css'

const BoardFilter = (props) =>{

    const filterChanged = (event) =>{

        props.setFilter(event.target.value);
        
    };


    return(

        <div className='board-filter'>
            <label className="board-filter__label"> Filter Board</label>
            <input className="board-filter__input" placeholder = 'Enter Board here'type='text' onChange={filterChanged} value={props.defaultText} ></input>
        </div>

    );



};


export default BoardFilter;



