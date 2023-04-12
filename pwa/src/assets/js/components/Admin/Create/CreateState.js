import React, {useState} from "react";
import StateForm from "../StateMod/StateForm";



const CreateState = (props) =>
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

    const createState = (stateObj, imageFile) =>
    {
        props.toUploadState(stateObj.name, stateObj, imageFile, "upload");

    }

    if(openForm === true)
    {
        display = [

            <StateForm buttonUploadName= "Create" toStateUpdate = {createState} requireName ={true}></StateForm>,
            <button onClick={closeFormFunc}>Close</button>
        ];

        
    }
    else
    {
        display =  [

            <button onClick={openFormFunc}>Create State</button>

        ];

    }

    return(
        <div>
            {display}
        </div>
    );
}




export default CreateState;


