import { async } from '@firebase/util';
import React, {useState} from 'react';



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

        setImageFile(event.target.files[0]);
        setImage(event.target.value);
        console.log(event.target.files[0]);

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


    

    

    //console.log(name);

    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    return(
        <div>
            <label>Title</label>
            <input type='text' onChange={titleHandler} value={title}></input>
            <label>Board Text</label>
            <input type='text' onChange={engTextHandler} value={engText}></input>
            <label>Board Image</label>
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updateBoard}>{props.buttonUploadName}</button>


        </div>


    );

};










export default BoardForm;