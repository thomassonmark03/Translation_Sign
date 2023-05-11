import { async } from '@firebase/util';
import React, {useState} from 'react';


//Gets input from the user to modify a state.
//Can modify the name and the image.
//The programmer may specify if the name and image is required or not.
const StateForm = (props) =>{

    //If the require prop for name or image is not explicitly set, set it to false.
    const requireName = typeof(props.requireName) === "boolean"? props.requireName : false;
    const requireImage = typeof(props.requireImage) === "boolean"? props.requireImage : false;


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [imageURL, setImageURL] = useState("");


    //The handlers will set the variables to be used when creating state objects
    //when the user is inputting the variables.
    const nameHandler = (event) =>{

        setName(event.target.value);

    };
    const imageHandler = (event) =>{


        setImageFile(event.target.files[0]);
        setImage(event.target.value);
        setImageURL((prevState) => 
            {
                URL.revokeObjectURL(prevState);
            
                return URL.createObjectURL(event.target.files[0]);
            
            }
        );

        console.log(event.target.files[0]);

    };

    //Handles updating the state after the update state button is pressed.
    const updateState = () => {

        //If a parameter is required and is not filled out, do not proceed.
        const checkName = !requireName || name !== "";
        const checkImage = !requireImage || image !== "";
        if(checkName && checkImage)
        {
            let stateObj = {}
           
            //Only modify the state object with parameters that are filled out.
            //This allows modifying the state object in individual fields without
            //destroying the original object.
            if(name != "")
                stateObj.name = name;
            if(image != "")
                stateObj.img = image;


            //Reset the input fields and revoke the image url.
            setImage("");
            setName("");
            setImageFile("");
            setImageURL((prevState) => 
                {
                    URL.revokeObjectURL(prevState);
            
                    return "";
            
                }
            );
            props.toStateUpdate(stateObj, imageFile);
        }
        else
        {
            console.log('ERROR IN STATE FORM');
        }
    };


    

    


    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    //Get state and image input, display the image if one is selected. Also, display the update button.
    return(
        <div>

            <label>Name of State</label>
            <input type='text' onChange={nameHandler} value={name}></input>
            <label>State Image</label>
            {image != "" && 
                <img src = {imageURL} width={300} height={300}></img>
            }
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updateState}>{props.buttonUploadName}</button>


        </div>


    );

};










export default StateForm;














