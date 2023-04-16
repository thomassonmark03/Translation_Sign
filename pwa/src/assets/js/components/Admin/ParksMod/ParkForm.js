import { async } from '@firebase/util';
import React, {useState} from 'react';



const ParkForm = (props) =>{

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


    const updatePark = () => {
        const checkName = !requireName || name !== "";
        const checkImage = !requireImage || image !== "";

        if(checkName && checkImage)
        {
            const parkObj = {};
           
            if(name  != "")
                parkObj.name = name;

            if(image != "")
                parkObj.img = image;

            console.log(parkObj);
            setImage("");
            setName("");
            setImageFile("");
            props.toUpdatePark(parkObj, imageFile);
        }
        else
        {
            console.log('ERROR IN PARK FORM');
        }
    };


    

    

    //console.log(name);

    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    return(
        <div>
            <label>Name of Park</label>
            <input type='text' onChange={nameHandler} value={name}></input>
            <label>Image of Park</label>
            {image != "" && 
                <img src = {URL.createObjectURL(imageFile)} width={300} height={300}></img>
            }
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updatePark}>{props.buttonName}</button>


        </div>


    );

};










export default ParkForm;