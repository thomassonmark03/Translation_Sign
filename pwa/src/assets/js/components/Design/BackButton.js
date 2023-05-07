import React from "react";
import { Link } from "react-router-dom";
import './BackButton.css';

//Lets the user go back regardless of they are using the webpage or the pwa.
//Extremely important for the PWA as no backbutton exists there like in webbrowsers.
const BackButton = (props) =>{

    //Finds the fullpath and splits it up.
    //Get rid of the index if it is empty(occurs when a / is follwed up by no other text)
    const fullPath = window.location.href;
    let separatedPath = fullPath.split('/');
    if(separatedPath[separatedPath.length-1] == '') // if the last element is empty(happens with paths that end in a /), remove it and then find the backpath.
        separatedPath.pop();
    let backPath = "";

    //Remerge the backpath, getting rid of the last part of the path name.
    for(let i = 0; i < separatedPath.length-1; i++)
    {
        backPath += separatedPath[i];

        if(i + 1 < separatedPath.length-1)
            backPath += '/';
    }

    //Clicking the backpath will go back to the previous page.
    return(
        <Link to={backPath}>
            <div className="backbutton__button">{'<---' + props.text}</div>
        </Link>
    );


};







export default BackButton;