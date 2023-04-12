import React, {useState} from "react";
import BoardForm from "../BoardMod/BoardForm";


const CreateBoard = (props) =>
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

    const createBoard = (boardObj, imageFile) =>
    {
        props.toUploadBoard(boardObj.title, boardObj, imageFile, "upload");

    }

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

    return(
        <div>
            {display}
        </div>
    );
}




export default CreateBoard;


