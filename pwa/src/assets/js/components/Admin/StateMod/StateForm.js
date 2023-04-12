import { async } from '@firebase/util';
import React, {useState} from 'react';



const StateForm = (props) =>{

    const requireName = typeof(props.requireName) === "boolean"? props.requireName : false;
    const requireImage = typeof(props.requireImage) === "boolean"? props.requireImage : false;


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");


    const nameHandler = (event) =>{

        setName(event.target.value);

    };



    const imageHandler = (event) =>{

        setImageFile(event.target.files[0]);
        setImage(event.target.value);
        console.log(event.target.files[0]);

    };


    const updateState = () => {
        const checkName = !requireName || name !== "";
        const checkImage = !requireImage || image !== "";

        if(checkName && checkImage)
        {
            let stateObj = {}
           
            if(name != "")
                stateObj.name = name;
            if(image != "")
                stateObj.img = image;

            console.log(stateObj);
            setImage("");
            setName("");
            setImageFile("");
            props.toStateUpdate(stateObj, imageFile);
        }
        else
        {
            console.log('ERROR IN STATE FORM');
        }
    };


    

    

    //console.log(name);

    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    return(
        <div>

            <label>Name of State</label>
            <input type='text' onChange={nameHandler} value={name}></input>
            <label>State Image</label>
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updateState}>{props.buttonUploadName}</button>


        </div>


    );

};










export default StateForm;














