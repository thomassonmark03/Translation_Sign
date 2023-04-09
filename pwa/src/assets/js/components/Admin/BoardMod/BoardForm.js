import { async } from '@firebase/util';
import React, {useState} from 'react';



const BoardForm = (props) =>{


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

        if(title != "" || image != "" || engText != "")
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
            <button onClick={updateBoard}>Update</button>


        </div>


    );

};










export default BoardForm;