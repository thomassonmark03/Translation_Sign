import React, {useState, useEffect} from 'react';
import StateForm from './StateForm';
import DeleteButton from '../Delete/DeleteButton';

import './StateMod.css';



//Handles the displays for the states such that they can be modified.
const StateMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const state_name = props.stateName;
    const state_img = props.stateImage;
    const state_id = props.stateId;


    //Toggles whether or not a person is editing this particular state when clicked.
    //Tell the admin when selected such that it can deselect other states.
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


    //Update function that sends all the paramters needed by the admin
    //to update a state.
    const updateState = (newStateObj, imageFile) =>{
    
         props.toUploadState(state_id, newStateObj, imageFile, "update");
    }




    //Tells the admin to the delete the state selected.
    const deleteState = () =>{
    
        props.toDeleteState(state_id);
    }

    let editMenu = "";


    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    //Allows the state component to monitor when the parent changes its selected state.
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected])


    //Show the state form and delete button options when selected, otherwise don't.
    if(selected)
    {
        editMenu =  <div>
                        <StateForm buttonUploadName= "Update" toStateUpdate={updateState}></StateForm>
                        <DeleteButton delete = {deleteState} name = {state_name} typeName ={'State'}></DeleteButton>
                    </div>;
            
    }

    //Display the state compnent as well as the state form and delete function if selected.
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







