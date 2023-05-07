import React, {useState} from "react";


//The delete button will show a prompt to delete the corresponding state, park, and board.
//A confirmation box is added to prevent accidental deletions.
const DeleteButton = (props) =>{

    const [deletePrompt, setDeletePrompt]= useState(false);

    //Once a delete is initiated, a prompt is displayed when the delete prompt variable is set to true
    //or hidden when it is set to false.
    const openDeletePrompt = () =>{
        setDeletePrompt(true);
    }
    const closeDeletePrompt = () =>{
        setDeletePrompt(false);
    }
    if(deletePrompt == false)
    {
       return <button onClick={openDeletePrompt} style={{background: 'red',color: 'white'}}>Delete {props.typeName}</button>;
    }
    else
    {
        return( 
            <div>
                <label>Are you sure you want to delete {props.name}?</label>
                <button onClick={closeDeletePrompt} style={{background: 'gray',color: 'white'}}>No</button>;
                <button onClick={props.delete} style={{background: 'red',color: 'white'}}>Yes</button>;
            </div>
        );
    }
}


export default DeleteButton;