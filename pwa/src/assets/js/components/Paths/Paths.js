import React, {useState, useEffect} from 'react';
import {Route,Routes} from "react-router-dom";
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import ParkHub from '../Parks/ParkHub';

import BoardPage from '../Board/BoardSingle';

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

    useEffect(() => {
        const getState = async() => {
            const data = await getDocs(stateCollection);
            setStates(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getState();
        console.log("MORE CALLS");
    },[]);


    //Renders all the states present in the database.
    const renderStatePaths = () =>
    {
        let i;
        const stateRoutes = [];
        
        for(i = 0; i < states.length; i++)
        {

            const titleParts = states[i].name.split(" ");
            let linkTitle = "";
            for (let i = 0; i < titleParts.length; i++)
            {
                linkTitle += titleParts[i];
            }
            stateRoutes.push(<Route path={'/' + linkTitle + '/*'} element={<ParkHub stateId = {states[i].id}/>}></Route>) 
            //https://ui.dev/react-router-nested-routes
        }
        console.log(stateRoutes);

        return stateRoutes;
    }





    return(
        <Routes>
            <Route path= '/' element={<Home states = {states}/>}/>

            {renderStatePaths()}


            <Route path='/BoardPage' element={<BoardPage/>}/>
            <Route path= '/Admin/*' element={<Contact/>}/>




        </Routes>
    )
}

export default Paths

