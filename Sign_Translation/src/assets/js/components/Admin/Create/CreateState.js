import React, {useState} from "react";
import StateForm from "../StateMod/StateForm";



//Allows a state to be created, very similar to the state form.
const CreateState = (props) =>
{
    const [openForm, setOpenForm] = useState(false);

    let display;



    //Close form and open form handle when the form will displayed through the open form variable.
    //True means display the form, false means close the form.
    const closeFormFunc = () =>
    {
        setOpenForm(false);
    }
    const openFormFunc = () =>
    {
        setOpenForm(true);
    }


    //When the state needs to be created, send it to the admin.
    //Note that the state name will be its id when created.
    const createState = (stateObj, imageFile) =>
    {
        props.toUploadState(stateObj.name, stateObj, imageFile, "upload");

    }


    
    //Display the state form as well as way to close the form when the form is opened.
    //Otherwise, there is button to open the form.
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

    //Returns either the create button to display the form or the form with a close button to close the form.
    return(
        <div>
            {display}
        </div>
    );
}




export default CreateState;


