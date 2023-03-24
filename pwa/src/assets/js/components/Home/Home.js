import React, {useState, useEffect} from 'react'
import Header from '../Design/Header'
import State from './State'
import StateFilter from './StateFilter'


import TexasPic from './States/texas.jpg'
import CaliforniaPic from './States/california.jpg'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Database/FirebaseConfig';


const TEST_STATES = [

    {
        id: 'Texas',
        description: 'Big Texas',
        img: TexasPic,
        route: './test'
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        img: CaliforniaPic,
        route: './test'
    }


];


const Home = () =>{

    const stateCollection = collection(db, 'States');
    const [states, setStates] = useState([]);
    //const [states, setStates] = [...TEST_STATES];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        //DEBUG
        console.log(text);
        console.log('In filtering states')
        //
        

        setFilterText(text);


    };

    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 

    const filterState = (state) =>{
        let matches = 0;
        let lcStateName = state.id.toLowerCase();
        let lcFilterText = filterText.toLowerCase();

        console.log(lcStateName);

        for(let i = 0; i < filterLength && i < lcStateName.length; i++)
        {
            console.log("state character" + state[i]);
            console.log("ft Character:" +  filterText[i]);
            if(lcStateName[i] === lcFilterText[i])
                matches++;
        }

        return lcFilterText === '' || (lcStateName[0] === lcFilterText[0] && matches >= filterLength - 2);

    };
    const displayStates = states.filter(filterState);


    //Database
    useEffect(() => {
        const getState = async() => {
            const data = await getDocs(stateCollection);
            setStates(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getState();
    },[stateCollection]);
    


    return(
        <div>
            <Header></Header>
            <StateFilter setFilter = {filterSet}/>
            <div>
                {displayStates.map( (state) => {

                        return <State 
                            name= {state.id}
                            description= {'hello'}
                            stateImage = {state.img}
                            route= {'./' + state.id}
                        
                        
                        
                        />
                    }



                )}

                



            </div>

        </div>



    );




};




export default Home;