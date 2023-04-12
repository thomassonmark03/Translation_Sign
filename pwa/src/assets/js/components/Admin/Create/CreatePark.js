import React, {useState} from "react";
import ParkForm from "../ParksMod/ParkForm";



const CreatePark = (props) =>
{
    const [openForm, setOpenForm] = useState(false);

    let display;

    const closeFormFunc = () =>
    {
        setOpenForm(false);
    }

    const openFormFunc = () =>
    {
        setOpenForm(true);
    }

    const createPark = (parkObj, imageFile) =>
    {
        props.toUploadPark(parkObj.name, parkObj, imageFile, "upload");

    }

    if(openForm === true)
    {
        display = [

            <ParkForm buttonName = "Create" toUpdatePark = {createPark} requireName ={true}></ParkForm>,
            <button onClick={closeFormFunc}>Close</button>
        ];

        
    }
    else
    {
        display =  [

            <button onClick={openFormFunc}>Create Park</button>

        ];

    }

    return(
        <div>
            {display}
        </div>
    );
}




export default CreatePark;


