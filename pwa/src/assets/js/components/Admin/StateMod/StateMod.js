import React, {useState} from 'react';
import StateForm from './StateForm';

import './StateMod.css';
import {Link} from "react-router-dom";



const StateMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const state_name = props.name;
    const state_img = props.stateImage;

    const editState = () =>{

        if(selected == true)
        {
            setSelected(false);
            props.onDeselectState();

        }
        else
        {
            setSelected(true);
            props.onCallState(state_name);
        }


    };


    const updateState = (newStateObj) =>{
    
         console.log(newStateObj);
         props.toUploadState(state_name, newStateObj);
    }

    let editMenu = "";

    if(selected)
    {
        editMenu =  <div>
                        <StateForm name={state_name} image={state_img} toStateUpdate={updateState}></StateForm>
                    </div>;
            
    }

    return(
        <div>
            <div onClick={editState} className={`stateMod ${selected ? "stateMod_selected":"stateMod_not_selected"} `}>
                <img alt= {state_name + ' image here'} src={state_img}></img>
                <p>{state_name}</p>

            </div>
            {editMenu}
        </div>

    )


};



export default StateMod;







