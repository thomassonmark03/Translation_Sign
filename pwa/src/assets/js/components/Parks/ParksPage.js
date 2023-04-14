import React, {useState, useEffect} from 'react'
import Header from '../Design/Header'
import {Route,Routes} from "react-router-dom";
import Park from './Park'
import ParkFilter from './ParkFilter'



import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';
import BoardPage from '../Board/BoardSingle';

/*
const TEST_PARKS= [

    {
        name: 'Texas',
        description: 'Big Texas',
        image: TexasPic,
        route: './test'
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        image: CaliforniaPic,
        route: './test'
    }


];
*/

//Find length of string
//Find match of string
//If matches > 1/2 length of string, display

const filterPark = (park, filterText) =>{
    const filterLength = filterText.length; 
    let matches = 0;
    let lcParkName = park.name.toLowerCase();
    let lcFilterText = filterText.toLowerCase();


    for(let i = 0; i < filterLength && i < lcParkName.length; i++)
    {
        if(lcParkName[i] === lcFilterText[i])
            matches++;
    }

    return lcFilterText === '' || (lcParkName[0] === lcFilterText[0] && matches >= filterLength - 2);

};

//Refs: 
// https://ui.dev/react-router-nested-routes


const ParkPage = (props) =>{

    const parks = props.parks;
    //const states = [...TEST_STATES];
    const [filterText, setFilterText] = useState('');



    const filterSet = (text) =>{
        setFilterText(text);


    };

    const displayParks = parks.filter((park) => {return filterPark(park, filterText)});



    return(
        <div>
            <Header></Header>
            <ParkFilter setFilter = {filterSet}/>
            <div>
                {displayParks.map( (park) => {
                        const titleParts = park.name.split(" ");
                        let linkTitle = "";
                        for (let i = 0; i < titleParts.length; i++)
                        {
                            linkTitle += titleParts[i];
                        }

                        return <Park
                            name= {park.name}
                            description= {'hello'}
                            parkImage = {park.img}
                            route= {'./' + linkTitle}
                        
                        
                        
                        />
                    }



                )}

                



            </div>

        </div>



    );




};




export default ParkPage;
export {filterPark};















