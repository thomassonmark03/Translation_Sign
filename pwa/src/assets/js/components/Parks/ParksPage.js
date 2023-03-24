import React, {useState, useEffect} from 'react'
import Header from '../Design/Header'
import Park from './Park'
import ParkFilter from './ParkFilter'



import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';

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


const ParkPage = () =>{

    const parkCollection = collection(db, 'States/Texas/Parks');
    const [parks, setParks] = useState([]);
    //const states = [...TEST_STATES];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };

    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 

    const filterPark = (park) =>{
        let matches = 0;
        let lcParkName = park.id.toLowerCase();
        let lcFilterText = filterText.toLowerCase();


        for(let i = 0; i < filterLength && i < lcParkName.length; i++)
        {
            if(lcParkName[i] === lcFilterText[i])
                matches++;
        }

        return lcFilterText === '' || (lcParkName[0] === lcFilterText[0] && matches >= filterLength - 2);

    };
    const displayParks = parks.filter(filterPark);


    //Database
    useEffect(() => {
        const getPark = async() => {
            const data = await getDocs(parkCollection);
            setParks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPark ();
    },[]);


    return(
        <div>
            <Header></Header>
            <ParkFilter setFilter = {filterSet}/>
            <div>
                {displayParks.map( (park) => {

                        return <Park
                            name= {park.id}
                            description= {'hello'}
                            parkImage = {park.img}
                            route= {'./' + park.id}
                        
                        
                        
                        />
                    }



                )}

                



            </div>

        </div>



    );




};




export default ParkPage;















