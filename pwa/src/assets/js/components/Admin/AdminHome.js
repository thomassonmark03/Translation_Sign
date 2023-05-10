import React from "react";
import Admin from "./Admin";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "../Design/Header";

//Much like a hub page.
//The default page lets you select which admin feature to select.
//Only sign upload is available right now.
const AdminHome = () =>{

    return(
        <div>
            <Header showLogin ={false}></Header>
            <Routes>

                <Route path='' element={
                    <Link to='SignUpload'>
                        <button>Sign Upload</button>

                    </Link>

                }
                
                >
                </Route>

                <Route path= 'SignUpload' element={<Admin/>}/>

            </Routes>

        </div>




    )

}








export default AdminHome;