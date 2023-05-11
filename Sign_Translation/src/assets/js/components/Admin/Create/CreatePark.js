import React, {useState} from "react";
import ParkForm from "../ParksMod/ParkForm";


//Allows the park to be created in form very similiar to the update form.
const CreatePark = (props) =>
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

    //When the park needs to be created, send it to the admin.
    //Note that the park name will be its id when created.
    const createPark = (parkObj, imageFile) =>
    {
        props.toUploadPark(parkObj.name, parkObj, imageFile, "upload");

    }


    //Display the park form as well as way to close the form when the form is opened.
    //Otherwise, there is button to open the form.
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

    //Returns either the create button to display the form or the form with a close button to close the form.
    return(
        <div>
            {display}
        </div>
    );
}




export default CreatePark;


