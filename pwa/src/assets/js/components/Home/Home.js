import React, {useState} from 'react'
import Header from '../Design/Header'
import State from './State'
import StateFilter from './StateFilter'


import TexasPic from './States/texas.jpg'
import CaliforniaPic from './States/california.jpg'


const TEST_STATES = [

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


const Home = () =>{

    const states = [...TEST_STATES];
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
        let lcStateName = state.name.toLowerCase();
        let lcFilterText = filterText.toLowerCase();

        for(let i = 0; i < filterLength && i < lcStateName.length; i++)
        {
            console.log("state character" + state[i]);
            console.log("ft Character:" +  filterText[i]);
            if(lcStateName[i] == lcFilterText[i])
                matches++;
        }

        //Debug
        /* 
        console.log("Matches: " + matches);
        console.log("Filter Length: " + filterLength);
        console.log("stateName length: " + stateName.length);
        console.log("stateName: " + stateName);
        console.log("filterText: " + filterText);
        console.log("filterText: " + filterText);
        */

        return matches >= (filterLength/2)

    };

    const displayStates = states.filter(filterState);
    console.log(displayStates);



    return(
        <div>
            <Header></Header>
            <StateFilter setFilter = {filterSet}/>
            <div>
                {displayStates.map( (state) => {

                        return <State 
                            name= {state.name} 
                            description = {state.description} 
                            stateImage= {state.image}
                            route= {state.route}
                        
                        
                        
                        />
                    }



                )}

                



            </div>
        </div>



    )



};




export default Home