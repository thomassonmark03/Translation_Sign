import React, {useState} from "react";
import BoardForm from "../BoardMod/BoardForm";


//Allows the board to be created, very similar to the board form.
const CreateBoard = (props) =>
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

    //When the board needs to be created, send it to the admin.
    //Note that the board title will be its id when created.
    const createBoard = (boardObj, imageFile) =>
    {
        props.toUploadBoard(boardObj.title, boardObj, imageFile, "upload");

    }

    //Display the board form as well as way to close the form when the form is opened.
    //Otherwise, there is button to open the form.
    if(openForm === true)
    {
        display = [

            <BoardForm toBoardUpdate = {createBoard} buttonUploadName = "Create"  requireName ={true}></BoardForm>,
            <button onClick={closeFormFunc}>Close</button>
        ];

        
    }
    else
    {
        display =  [

            <button onClick={openFormFunc}>Create Board</button>

        ];

    }

    //Returns either the create button to display the form or the form with a close button to close the form.
    return(
        <div>
            {display}
        </div>
    );
}




export default CreateBoard;


