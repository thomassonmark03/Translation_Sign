import React from 'react';
import './Admin.css';
import { useState,useEffect } from "react";
import { db } from '../Database/FirebaseConfig';
import { collection,getDocs, addDoc} from 'firebase/firestore';

import Header from '../Design/Header';

import StateFilter from '../Home/StateFilter';
import ParkFilter from '../Parks/ParkFilter';
import BoardFilter from '../Board/BoardFilter';



//import NotFoundImg from './not_found.png';

import StateMod from './StateMod/StateMod';


const NotFoundImg = 'https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg';

const TEST_STATES = [

    {
        name: 'Texas',
        description: 'Big Texas',
        image: NotFoundImg,
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        image: NotFoundImg,
    }


];

const TEST_PARKS = [

    {
        name: 'Park1',
        description: 'Big Texas',
        image: NotFoundImg,
    },

    {
        name: 'Park2',
        description: 'Hot and Dry',
        image: NotFoundImg,
    }


];

const TEST_BOARDS = [

    {
        name: 'Board1',
        description: 'Big Texas',
        image: NotFoundImg,
    },

    {
        name: 'Board2',
        description: 'Hot and Dry',
        image: NotFoundImg,
    }


];


function Admin() {

    //const stateCollection = collection(db, 'States');


    const [states, setStates] = useState([...TEST_STATES]);
    const [parks, setParks] = useState([...TEST_PARKS]);
    const [boards, setBoards] = useState([...TEST_BOARDS]);

    /*const stateGet = async () =>{
        const statesSnapshot = await getDocs(stateCollection);

        try{

            setStates(statesSnapshot.map((doc) => ({...doc.data(), id: doc.id}) ) );
            console.log(states);
            

        }
        catch(error){
            console.log(error);
        }


    }
    */

    //useEffect(stateGet, []);

            /*<select>
                <option>
                    Texas
                </option>
                <option>
                    Alabama 
                </option>

            </select>*/
   


    return (
        <div>
            <Header></Header>
            <div className='sign_translation_editor'>
                <div className='sign_translation_editor__states'>
                    <div>
                        <StateFilter></StateFilter>
                    </div>

                    <div>
                    {states.map( (state) => {


                            return (<StateMod route = './' name={state.name} stateImage = {state.image}  ></StateMod>)




                        }


                    )}
                    </div>

                </div>
                <div className='sign_translation_editor__parks'>
                    <div>
                        <ParkFilter></ParkFilter>
                    </div>
                    <div>
                    {parks.map( (state) => {


                            return <StateMod route = './' name={state.name} stateImage = {state.image}  ></StateMod>




                        }


                    )}
                    </div>
                </div>

                <div className='sign_translation_editor__boards'>
                    <div>
                        <BoardFilter></BoardFilter>
                    </div>
                    <div>
                        {boards.map( (state) => {


                                return <StateMod route = './' name={state.name} stateImage = {state.image}  ></StateMod>




                            }


                        )}
                    </div>

                </div >

        

        
        
        
        
            </div>
        </div>

    );
}
/*const testAdd = async () =>
    {
        console.log('in add doc');
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: 'Alan',
            middle: 'Madison',
            last: 'Young',
            born: 1998
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }

    }

*/
export default Admin;
