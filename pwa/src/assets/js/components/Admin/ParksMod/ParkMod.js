import React, {useState} from 'react';
import ParkForm from './ParkForm';

import './ParkMod.css';
import {Link} from "react-router-dom";



const ParkMod = (props) =>{
    const [selected, setSelected]= useState(props.selected);
    const park_name = props.name;
    const park_img = props.parkImage;

    const editPark = () =>{

        if(selected == true)
        {
            setSelected(false);

        }
        else
        {
            setSelected(true);
            props.onCallPark(park_name);
        }


    };


    const updateState = (newParkObj) =>{
    
         props.toUploadPark(park_name, newParkObj);
    }

    let editMenu = "";

    if(selected)
    {
        editMenu =  <div>
                        <ParkForm name={park_name} image={park_img} toStateUpdate={updateState}></ParkForm>
                    </div>;
            
    }

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







