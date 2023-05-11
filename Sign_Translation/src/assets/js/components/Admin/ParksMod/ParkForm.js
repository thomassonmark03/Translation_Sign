import React, {useState} from 'react';


//Displays a park form, allowing for the name and image of a park to be edited.
const ParkForm = (props) =>{

    const requireName = typeof(props.requireName) === "boolean"? props.requireName : false;
    const requireImage = typeof(props.requireImage) === "boolean"? props.requireImage : false;

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [imageURL, setImageURL] = useState("");

    //The handlers get the input in the textboxes into the variables to be sent up to the park mod.
    //The image handler also helps by displaying the image to be used when uploaded.
    const nameHandler = (event) =>{

        setName(event.target.value);

    };
    const imageHandler = (event) =>{

        //Memory management, prevents memory leaks from unreleased image files.
        URL.revokeObjectURL(imageFile);

        //The file to be uploaded as the park image.
        setImageFile(event.target.files[0]);
        //The path name of the file image, not very useful except for reseting the directory after
        //the form is submitted.
        setImage(event.target.value);

        //The image url allows the image to be displayed on the webpage.
        setImageURL((prevState) => 
            {
                //Anytime a new image is selected, delete the former object url to prevent memory leaks.
                URL.revokeObjectURL(prevState);
            
                return URL.createObjectURL(event.target.files[0]);
            
            }
        );

    };


    //When the update button is clicked, do this. 
    const updatePark = () => {
        //Check to see if the code explicitly requires a parameter, do not procede if a required parameter
        //is not filled.
        const checkName = !requireName || name !== "";
        const checkImage = !requireImage || image !== "";

        if(checkName && checkImage)
        {
            const parkObj = {};
           
            //Only give the object parameters if you have it.
            //This prevents updates from occurring on non-modified parameters.
            if(name  != "")
                parkObj.name = name;
            if(image != "")
                parkObj.img = image;

            //Memory management, prevents memory leaks from unreleased image files.
            URL.revokeObjectURL(imageFile);

            //Reset the form, empty the input.
            setImage("");
            setName("");
            setImageFile("");
            setImageURL((prevState) => 
                {
                    URL.revokeObjectURL(prevState);
            
                    return "";
            
                }
            );


            props.toUpdatePark(parkObj, imageFile);
        }
        else
        {
            console.log('ERROR IN PARK FORM');
        }
    };


    

    


    //https://stackoverflow.com/questions/30483645/get-file-object-from-file-input
    //Show input for the name and image of the park. only display an image if it one is selected.
    return(
        <div>
            <label>Name of Park</label>
            <input type='text' onChange={nameHandler} value={name}></input>
            <label>Image of Park</label>
            {image != "" && 
                <img src = {imageURL} width={300} height={300}></img>
            }
            <input type='file' accept='.png,.jpg,.tif' onChange={imageHandler} value={image}></input>
            <button onClick={updatePark}>{props.buttonName}</button>


        </div>


    );

};










export default ParkForm;