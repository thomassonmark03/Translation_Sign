import { async } from '@firebase/util';
import React, {useState} from 'react';
import './BoardMod.css';



const BoardForm = (props) =>{

    const requireTitle = typeof(props.requireName) === "boolean"? props.requireName : false;
    const requireEngText = typeof(props.requireEngText) === "boolean"? props.requireEngText: false;
    const requireImage = typeof(props.requireImage) === "boolean"? props.requireImage : false;

    const [title, setTitle] = useState("");
    const [engText, setEngText] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");


    const titleHandler = (event) =>{

        setTitle(event.target.value);

    };

    const engTextHandler = (event) =>{

        setEngText(event.target.value);

    };



    const imageHandler = (event) =>{

        //Memory management, prevents memory leaks from unreleased image files.
        URL.revokeObjectURL(imageFile);

        setImageFile(event.target.files[0]);
        setImage(event.target.value);



    };


    const updateBoard = () => {
        const checkTitle = !requireTitle || title !== "";
        const checkImage = !requireImage || image !== "";
        const checkEngText = !requireEngText || engText !== "";
        if(checkTitle && checkImage && checkEngText)
        {
            const boardObj = {};

            if(title != "")
                boardObj.title = title;
            if(image != "")
                boardObj.img = image;
            if(engText != "")
                boardObj.en = engText;
            
            console.log(boardObj);
            //Memory management, prevents memory leaks from unreleased image files.
            URL.revokeObjectURL(imageFile);
            setTitle("");
            setEngText("");
            setImage("");
            setImageFile("");
            props.toBoardUpdate(boardObj, imageFile);
        }
        else
        {
            console.log('ERROR IN STATE FORM');
        }
    };


    

    

    //console.log(image);

    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    return(
        <div>
            <label>Title</label>
            <input type='text' onChange={titleHandler} value={title}></input>
            <label>Board Text</label>
            <textarea className= "board_form___textarea" type='text' onChange={engTextHandler} value={engText}></textarea>
            <label>Board Image</label>
            {image != "" && 
                <img src = {URL.createObjectURL(imageFile)} width={300} height={300}></img>
            }
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>

            <button onClick={updateBoard}>{props.buttonUploadName}</button>


        </div>


    );

};










export default BoardForm;