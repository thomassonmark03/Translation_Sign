import React, {useState, useEffect} from 'react'
import {Route,Routes, useLocation} from "react-router-dom";
import ParkPage from './ParksPage';
import BoardHub from '../Board/BoardHub';
import BoardSingle from '../Board/BoardSingle';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';



//Refs: 
// https://ui.dev/react-router-nested-routes


const ParkHub = (props) =>{

    const path = useLocation().pathname;

    const parkCollection = collection(db, 'States/' + props.stateId + "/Parks");
    const [parks, setParks] = useState([]);

    //Database
    useEffect(() => {
        const getPark = async() => {
            const data = await getDocs(parkCollection);
            setParks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPark ();
    },[]);



    //Renders all the states present in the database.
    const renderParksPath = () =>
    {
        let i;
        const parksRoutes = [];
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