import React, {useState} from "react";



const DeleteButton = (props) =>{

    const [deletePrompt, setDeletePrompt]= useState(false);

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