import { async } from '@firebase/util';
import React, {useState} from 'react';



const ParkForm = (props) =>{


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

        if(name != "" || image != "")
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
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updatePark}>Update</button>


        </div>


    );

};










export default ParkForm;