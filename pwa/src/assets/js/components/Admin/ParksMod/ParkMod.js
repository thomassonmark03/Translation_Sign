import React, {useState, useEffect} from 'react';
import ParkForm from './ParkForm';
import DeleteButton from '../Delete/DeleteButton';

import './ParkMod.css';


//Park mod handles the display for modifying each park.
const ParkMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const park_id = props.parkId;
    const park_name = props.parkName;
    const park_img = props.parkImage;

    //Select or deselect the park depending if selected is true.
    //Communicate with admin or parent if selected(currently only one parent at a time can be selected).
    const editPark = () =>{

        if(selected == true)
        {
            props.onDeselectPark();

        }
        else
        {
            props.onCallPark(park_id);
        }

        

    };


    //If a park is to be updated, send the object from park form and the park id to the admin or parent.
    const updatePark = (newParkObj, imageFile) =>{
    
         props.toUploadPark(park_id, newParkObj, imageFile, "update");
    }


    //Delete a park with this park id.
    const deletePark = () =>{
        props.toDeletePark(park_id);
    }

    let editMenu = "";

    //Only show the park form and delete button if selected.
    if(selected)
    {
        editMenu =  <div>
                        <ParkForm buttonName = "Update" toUpdatePark={updatePark}></ParkForm>
                        <DeleteButton delete = {deletePark} name={park_name} typeName ={'Park'}></DeleteButton>
                    </div>;
            
    }

    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    //Watches the props.selected variable handled by the parent. Update its state if changed.
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected])

    //Show the park card as well as the park form and delete button if selected.
    return(
        <div>
            <div onClick={editPark} className={`parkMod ${selected ? "parkMod_selected":"parkMod_not_selected"} `}>
                <img alt= {park_name + ' image here'} src={park_img}></img>
                <p>{park_name}</p>

            </div>
            {editMenu}
        </div>

    )


};



export default ParkMod;







