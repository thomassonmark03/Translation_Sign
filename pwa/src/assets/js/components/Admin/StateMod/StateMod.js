import React, {useState, useEffect} from 'react';
import StateForm from './StateForm';

import './StateMod.css';
import {Link} from "react-router-dom";



const StateMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const state_name = props.stateName;
    const state_img = props.stateImage;
    const state_id = props.stateId;

    const editState = () =>{

        if(selected == true)
        {
            props.onDeselectState();

        }
        else
        {
            props.onCallState(state_id);
        }


    };


    const updateState = (newStateObj) =>{
    
         console.log(newStateObj);
         props.toUploadState(state_id, newStateObj);
    }

    let editMenu = "";


    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected])

    if(selected)
    {
        editMenu =  <div>
                        <StateForm name={state_name} image={state_img} id = {state_id} toStateUpdate={updateState}></StateForm>
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







