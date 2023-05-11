import React, {useState} from 'react'
import Header from '../Design/Header'
import State from './State'
import StateFilter from './StateFilter'


//Takes a state object as well as filter text to filter out the states.
const filterState = (state, filterText) =>{
    //Find length of string
    //Find match of string
    //If matches > 1/2 length of string, keep that state. 
    const filterLength = filterText.length; 
    let matches = 0;
    for(let i = 0; i < filterLength && i < state.id.length; i++)
    {
        if(state.name[i] === filterText[i] || state.name + '32' === filterText[i])
            matches++;
    }

    return filterText === '' || matches >= filterLength - 2;
};

//Handles how the state home page is generated, including all its states based on
//the states object passed by the paths file.
const Home = (props) =>{

    const states = [...props.states];
    const [filterText, setFilterText] = useState('');

    const filterSet = (text) =>{
        setFilterText(text);


    };


    const displayStates = states.filter((state) => {return filterState(state, filterText)});

    //Display the header, the state filter, and the states.
    return(
        <div>
            <Header></Header>
            <StateFilter setFilter = {filterSet}/>
            <div>
                {displayStates.map( (state) => {

                        const titleParts = state.name.split(" ");
                        let linkTitle = "";
                        for (let i = 0; i < titleParts.length; i++)
                        {
                            linkTitle += titleParts[i];
                        }

                        return <State 
                            name= {state.name}
                            description= {'hello'}
                            stateImage = {state.img}
                            route= {'./' + linkTitle}
                        
                        
                        
                        />
                    }



                )}

                



            </div>

        </div>

    );




};




export default Home;
export {filterState};