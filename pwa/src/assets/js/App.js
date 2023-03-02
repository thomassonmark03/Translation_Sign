import React from 'react';
import '../css/main.css';
import {Route,Routes} from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
// import Texas from "./Texas";
import State from './State';
import Translate from './Translate';
import Contact from './Contact';

function App() {
    return (
        <Routes>
            <Route path="/" element={[<Header/>,<Translate/>,<State/>]}/>
            <Route path="/texas" element={[<Header/>,<Translate/>,<Body/>]}/>
            <Route path="/login" element={[<Header/>,<Translate/>,<Contact/>]}/>
        </Routes>
    )
}
export default App