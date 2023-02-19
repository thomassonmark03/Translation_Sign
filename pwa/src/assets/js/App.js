import React from 'react';
import '../css/main.css';
import {Route,Routes} from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Texas from "./Texas";
import Oklahoma from "./Oklahoma";
import Contact from './Contact';
import Kansas from './Kansas';

function App() {
    return (
        <Routes>
            <Route path="/" element={[<Header/>,<Body/>]}/>
            <Route path="/texas" element={[<Texas/>]}/>
            <Route path="/oklahoma" element={[<Oklahoma/>]}/>
            <Route path="/contact" element={[<Contact/>]} />
            <Route path="/kansas" element={[<Kansas/>]} />
        </Routes>
    )
}
export default App