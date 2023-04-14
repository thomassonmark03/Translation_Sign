import React, {useState, useEffect} from 'react';
import {Route,Routes} from "react-router-dom";
import Header from '../Design/Header';
import Home from '../Home/Home';
import Body from '../test/Body';
import Admin from '../Admin/Admin';
import ParkHub from '../Parks/ParkHub';

import BoardPage from '../Board/BoardSingle';

import { collection, getDocs} from 'firebase/firestore';
import { db } from '../Database/FirebaseConfig';
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
            <Route path= '/test' element={[<Header/>,<Body/>]}/>

            {renderStatePaths()}


            <Route path='/BoardPage' element={<BoardPage/>}/>
            <Route path='/Admin' element={<Admin/>}/>




        </Routes>
    )
}

export default Paths



/*
            <Route path='/Alabama' element={[<Header/>,<Body/>]}/>
            <Route path='/Alaska' element={[<Header/>,<Body/>]}/>
            <Route path='/Arizona' element={[<Header/>,<Body/>]}/>
            <Route path='/Arkansas' element={[<Header/>,<Body/>]}/>
            <Route path='/California' element={[<Header/>,<Body/>]}/>
            <Route path='/Colorado' element={[<Header/>,<Body/>]}/>
            <Route path='/Connecticut' element={[<Header/>,<Body/>]}/>
            <Route path='/Delaware' element={[<Header/>,<Body/>]}/>
            <Route path='/Florida' element={[<Header/>,<Body/>]}/>
            <Route path='/Georgia' element={[<Header/>,<Body/>]}/>
            <Route path='/Hawaii' element={[<Header/>,<Body/>]}/>
            <Route path='/Idaho' element={[<Header/>,<Body/>]}/>
            <Route path='/Illinois' element={[<Header/>,<Body/>]}/>
            <Route path='/Indiana' element={[<Header/>,<Body/>]}/>
            <Route path='/Iowa' element={[<Header/>,<Body/>]}/>
            <Route path='/Kansas' element={[<Header/>,<Body/>]}/>
            <Route path='/Kentucky' element={[<Header/>,<Body/>]}/>
            <Route path='/Louisiana' element={[<Header/>,<Body/>]}/>
            <Route path='/Maine' element={[<Header/>,<Body/>]}/>
            <Route path='/Maryland' element={[<Header/>,<Body/>]}/>
            <Route path='/Massachusetts' element={[<Header/>,<Body/>]}/>
            <Route path='/Michigan' element={[<Header/>,<Body/>]}/>
            <Route path='/Minnesota' element={[<Header/>,<Body/>]}/>
            <Route path='/Mississippi' element={[<Header/>,<Body/>]}/>
            <Route path='/Missouri' element={[<Header/>,<Body/>]}/>
            <Route path='/Montana' element={[<Header/>,<Body/>]}/>
            <Route path='/Nebraska' element={[<Header/>,<Body/>]}/>
            <Route path='/Nevada' element={[<Header/>,<Body/>]}/>
            <Route path='/New Hampshire' element={[<Header/>,<Body/>]}/>
            <Route path='/New Jersey' element={[<Header/>,<Body/>]}/>
            <Route path='/New Mexico' element={[<Header/>,<Body/>]}/>
            <Route path='/New York' element={[<Header/>,<Body/>]}/>
            <Route path='/North Carolina' element={[<Header/>,<Body/>]}/>
            <Route path='/North Dakota' element={[<Header/>,<Body/>]}/>
            <Route path='/Ohio' element={[<Header/>,<Body/>]}/>
            <Route path='/Oklahoma' element={[<Header/>,<Body/>]}/>
            <Route path='/Oregon' element={[<Header/>,<Body/>]}/>
            <Route path='/Pennsylvania' element={[<Header/>,<Body/>]}/>
            <Route path='/Rhode' Island element={[<Header/>,<Body/>]}/>
            <Route path='/South' Carolina element={[<Header/>,<Body/>]}/>
            <Route path='/South' Dakota element={[<Header/>,<Body/>]}/>
            <Route path='/Tennessee' element={[<Header/>,<Body/>]}/>
            <Route path='/Utah' element={[<Header/>,<Body/>]}/>
            <Route path='/Vermont' element={[<Header/>,<Body/>]}/>
            <Route path='/Virginia' element={[<Header/>,<Body/>]}/>
            <Route path='/Washington' element={[<Header/>,<Body/>]}/>
            <Route path='/West Virginia' element={[<Header/>,<Body/>]}/>
            <Route path='/Wisconsin' element={[<Header/>,<Body/>]}/>
            <Route path='/Wyoming' element={[<Header/>,<Body/>]}/>
            <Route path='/Texas' element={<ParkPage/>}/>

*/


