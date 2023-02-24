import React from 'react'
import {PrivateRoute, Route,Routes} from "react-router-dom";
import Home from '../Home/Home'
import Body from '../test/Body';

//
    
    const Paths = () =>{
        return(
            <Routes>
                <Route path= '/' element={<Home/>}/>
                <Route path= '/test' element={<Body/>}/>


            </Routes>
        )
    }

export default Paths






