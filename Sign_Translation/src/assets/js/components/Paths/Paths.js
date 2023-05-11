import React, {useState, useEffect} from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Home/Home';
import ParkHub from '../Parks/ParkHub';
import NotFound from './NotFound';

import { collection, getDocs} from 'firebase/firestore';
import { db } from '../Database/FirebaseConfig';
import Contact from '../Admin/Login/Contact';
//
    
const Paths = (props) =>{

    //https://cloud.google.com/firestore/docs/manage-data/enable-offline for using cache for offline


    const stateCollection = collection(db, 'States');
    const [states, setStates] = useState(()=>{
    
            return [];
        }
    );

    //This function will get all the states from the database after the DOM has been generated.
    //This will only occur once as indicated by the empty array as its second argument, as the 
    //second arguement is a condition that is checked every time it changes. An empty array will
    //never change, so this function is never called again. This is important as it prevents multiple
    //unnecessary reads to the database.
    useEffect(() => {
        const getState = async() => {
            const data = await getDocs(stateCollection);
            setStates(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getState();
    },[]);


    //Renders all the paths for each state.
    const renderStatePaths = () =>
    {
        let i;
        const stateRoutes = [];
        
        for(i = 0; i < states.length; i++)
        {
            //The paths are dependant on the state name. Paths are typically
            //without spaces, so spaces are stripped from the path name.
            const titleParts = states[i].name.split(" ");
            let linkTitle = "";
            for (let i = 0; i < titleParts.length; i++)
            {
                linkTitle += titleParts[i];
            }
            stateRoutes.push(<Route path={'/' + linkTitle + '/*'} element={<ParkHub stateId = {states[i].id}/>}></Route>) 
        }
        console.log(stateRoutes);

        return stateRoutes;
    }






    //Routes for paths as well as every hub page utilizes sub routes for its logic.
    //Basically, for a path without a state name, the default page will be the state selection page.
    //Otherwise, it will display that state page.
    //The admin page is also generated here if a path has the name admin instead of a state name.
    //https://ui.dev/react-router-nested-routes
    return(
        <Routes>
            <Route path= '/' element={<Home states = {states}/>}/>

            {renderStatePaths()}


            <Route path= '/Admin/*' element={<Contact/>}/>
            <Route exact path='*' element={<NotFound/>}/>




        </Routes>
    )
}

export default Paths

