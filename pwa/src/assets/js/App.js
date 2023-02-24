import React from 'react';
import '../css/main.css';
import {Route,Routes} from "react-router-dom";
import Home from './components/Home/Home'
import Body from "./components/test/Body";
import Contact from './components/Admin/Contact';

function App() {
    return (
        <Routes>
            <Route path="/" element={[<Home/>]}></Route>
            <Route path="/test" element={[<Body/>]}/>
        </Routes>
    )
}
export default App

/*\

            <Route path="/texas" element={[<Texas/>]}/>
            <Route path="/oklahoma" element={[<Oklahoma/>]}/>
            <Route path="/contact" element={[<Contact/>]} />
            <Route path="/kansas" element={[<Kansas/>]} />

*/