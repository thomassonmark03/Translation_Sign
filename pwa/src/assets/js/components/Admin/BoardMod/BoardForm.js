import React, {useState} from 'react';
import './BoardMod.css';


//Board form will take input from the user in the form of a Title, English Text, or Images.
//These are not required unless explicitly states using props.requre{Input}
const BoardForm = (props) =>{

    const requireTitle = typeof(props.requireName) === "boolean"? props.requireName : false;
    const requireEngText = typeof(props.requireEngText) === "boolean"? props.requireEngText: false;
    const requireImage = typeof(props.requireImage) === "boolean"? props.requireImage : false;

    const [title, setTitle] = useState("");
    const [engText, setEngText] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [imageURL, setImageURL] = useState("");

    //Handles setting the titles when input changes.
    const titleHandler = (event) =>{

        setTitle(event.target.value);

    };

    //Handles setting the english text of the board when input changes.
    const engTextHandler = (event) =>{

        setEngText(event.target.value);

    };

    //Handles displaying and grabbing the image file from the directory.
    const imageHandler = (event) =>{

        //The file that will be used for updating the image in the database.
        setImageFile(event.target.files[0]);
        //The file name is set, not used explicitly except to check if a file is selected.
        setImage(event.target.value);
        //The image URL is what is actually displayed.
        setImageURL((prevState) => 
            {
                //Memory management, removes the object URL before generating a new one.
                URL.revokeObjectURL(prevState);
            
                return URL.createObjectURL(event.target.files[0]);
            
            }
        );



    };


    //Allows the board to be updated by creating an object with all the parameters needed to create a board.
    //The board by default does not need any parameters, but you may require them as mentioned before. This
    //prevents the updating process away until the required parameters are met.
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
            
            //Resets the form textboxes to empty.
            setTitle("");
            setEngText("");
            setImage("");
            setImageFile("");
            setImageURL((prevState) => 
                {
                    //Once the form has been used, revoke the image url as it is no longer needed.
                    URL.revokeObjectURL(prevState);
            
                    return "";
            
                }
            );
            //Propogate the board upward to board mod.
            props.toBoardUpdate(boardObj, imageFile);
        }
        else
        {
            console.log('ERROR IN STATE FORM');
        }
    };


    

    

    //Will see a title and three options for title, board text, and image. The image will be
    //displayed only if it exists.
    return(
        <div>
            <label>Title</label>
            <input type='text' onChange={titleHandler} value={title}></input>
            <label>Board Text</label>
            <textarea className= "board_form___textarea" type='text' onChange={engTextHandler} value={engText}></textarea>
            <label>Board Image</label>
            {image != "" && 
                <img src = {imageURL} width={300} height={300}></img>
            }
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>

            <button onClick={updateBoard}>{props.buttonUploadName}</button>


        </div>


    );

};










export default BoardForm;