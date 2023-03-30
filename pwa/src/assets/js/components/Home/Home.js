import React, {useState} from 'react'
import Header from '../Design/Header'
import State from './State'
import StateFilter from './StateFilter'


import TexasPic from './States/texas.jpg'
import CaliforniaPic from './States/california.jpg'



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


const Home = (props) =>{

    const states = [...props.states];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };

    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, display
    const filterLength = filterText.length; 

    const filterState = (state) =>{
        let matches = 0;
        for(let i = 0; i < filterLength && i < state.id.length; i++)
        {
            if(state.id[i] === filterText[i] || state.id + '32' === filterText[i])
                matches++;
        }

        return filterText === '' || matches >= filterLength - 2;
    };
    const displayStates = states.filter(filterState);

    
    //const displayStates = [...states];


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