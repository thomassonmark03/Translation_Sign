import React, {useState, useEffect} from 'react'
import {Route,Routes, useLocation} from "react-router-dom";
import ParkPage from './ParksPage';
import BoardHub from '../Board/BoardHub';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';



//Refs: 
// https://ui.dev/react-router-nested-routes

//Main page of parks. Decides whether to display the park home page, with all the parks to select,
//or a specific park page(handled thorugh subroutes.
const ParkHub = (props) =>{

    const parkCollection = collection(db, 'States/' + props.stateId + "/Parks");
    const [parks, setParks] = useState([]);

    //Database
    //Gets all the parks from the database.
    useEffect(() => {
        const getPark = async() => {
            const data = await getDocs(parkCollection);
            setParks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPark ();
    },[]);



    //Renders all the parks present in the database.
    const renderParksPath = () =>
    {
        let i;
        const parksRoutes = [];

        //Adds the parks routes, stripping out the spaces.
        for(i = 0; i < parks.length; i++)
        {

            const titleParts = parks[i].name.split(" ");
            let linkTitle = "";
            for (let i = 0; i < titleParts.length; i++)
            {
                linkTitle += titleParts[i];
            }
            parksRoutes.push(<Route path={linkTitle + '/*'} element={<BoardHub stateId ={props.stateId} parkId={parks[i].id}/>}></Route>) 
            //https://ui.dev/react-router-nested-routes
        }
        console.log(parksRoutes);
    
        return parksRoutes;
    }

    //Renders either the Parkpage which displays all the available parks in a state when no park is in the path,
    //Or it renders a park with all its boards when a park is in the path.
    return(
        <div>
            <Routes>
                <Route path='' element={<ParkPage parks = {parks}/>}></Route>
                {renderParksPath()}
            </Routes>
        </div>



    );




};




export default ParkHub;