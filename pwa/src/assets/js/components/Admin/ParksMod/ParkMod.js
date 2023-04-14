import React, {useState, useEffect} from 'react';
import ParkForm from './ParkForm';
import DeleteButton from '../Delete/DeleteButton';

import './ParkMod.css';
import {Link} from "react-router-dom";



const ParkMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const park_id = props.parkId;
    const park_name = props.parkName;
    const park_img = props.parkImage;

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


    const updatePark = (newParkObj, imageFile) =>{
    
         props.toUploadPark(park_id, newParkObj, imageFile, "update");
    }

    const deletePark = () =>{
        props.toDeletePark(park_id);
    }

    let editMenu = "";

    if(selected)
    {
        editMenu =  <div>
                        <ParkForm buttonName = "Update" toUpdatePark={updatePark}></ParkForm>
                        <DeleteButton delete = {deletePark} name={park_name} typeName ={'Park'}></DeleteButton>
                    </div>;
            
    }

    //https://stackoverflow.com/questions/58888389/component-doesnt-re-render-when-props-change-using-usestate-hook
    useEffect( () => {
        setSelected(props.selected); 
    }, [props.selected])

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







