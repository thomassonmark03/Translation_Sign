import { async } from '@firebase/util';
import React, {useState} from 'react';



const StateForm = (props) =>{


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

        if(name != "" && image != "")
        {
            const stateObj = {
            
                name: name,
                imgFile: imageFile,

            }
            console.log(stateObj);
            setImage("");
            setName("");
            setImageFile("");
            props.toStateUpdate(stateObj);
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

            <input type='text' onChange={nameHandler} value={name}></input>
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updateState}>Update</button>


        </div>


    );

};










export default StateForm;














