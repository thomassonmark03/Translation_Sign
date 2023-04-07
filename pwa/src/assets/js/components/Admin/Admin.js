import React from 'react';
import './Admin.css';
import { useState,useEffect } from "react";
import {db, imgStorage} from "../Database/FirebaseConfig";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { collection,getDocs, addDoc} from 'firebase/firestore';

import Header from '../Design/Header';

import StateFilter from '../Home/StateFilter';
import ParkFilter from '../Parks/ParkFilter';
import BoardFilter from '../Board/BoardFilter';



//import NotFoundImg from './not_found.png';

import StateMod from './StateMod/StateMod';
import ParkMod from './ParksMod/ParkMod';
import BoardMod from './BoardMod/BoardMod';


const NotFoundImgState = 'https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg';
const NotFoundImgPark = 'https://community.librenms.org/uploads/default/original/2X/7/759793552edd033b80526884b06a706fdd1a06ba.png';
const NotFoundImgBoard = 'https://i.ytimg.com/vi/K94i1ALQ-H4/mqdefault.jpg'


const TEST_BOARDS = [

    {
        name: 'Board1',
        enText: 'Safety jargon smargon',
        image: NotFoundImgBoard,
    },

    {
        name: 'Board2',
        enText: 'SKIP',
        image: NotFoundImgBoard,
    }


];


const TEST_PARKS = [

    {
        name: 'Park1',
        description: 'Poland',
        image: NotFoundImgPark,
        board: [TEST_BOARDS[0]]
    },

    {
        name: 'Park2',
        description: 'England',
        image: NotFoundImgPark,
        board: [TEST_BOARDS[1]]
    }


];

const TEST_STATES = [

    {
        name: 'Texas',
        description: 'Big Texas',
        image: NotFoundImgState,
        parks: [TEST_PARKS[0]],
    },

    {
        name: 'California',
        description: 'Hot and Dry',
        image: NotFoundImgState,
        parks: [TEST_PARKS[1]],
    }


];




function Admin() {

    const stateCollection = collection(db, 'States');
    const [states, setStates] = useState([]);
    const [stateName, setStateName] = useState("");



    //const [states, setState] = useState(TEST_STATES);
    //const parks = TEST_STATES[0].parks;
    const [parks, setPark] = useState({});
    const [parkName, setParkName] = useState("");
    const parksUnfiltered = parks[stateName];
    console.log("Here are the parks unfiltered");
    console.log(parksUnfiltered)

    const [boards, setBoards] = useState({}); 
    const boardsUnfiltered = boards[parkName];




    const uploadState = async(stateName, newStateObj) => {
        console.log('in upload state');
        //Ref https://firebase.google.com/docs/storage/web/upload-files
        const stateImgRef = ref(imgStorage, 'states/'+newStateObj.name);
        uploadBytes(stateImgRef, newStateObj.image);

        //https://firebase.google.com/docs/storage/web/download-files


        newStateObj.image = await getDownloadURL(stateImgRef);
        setStates( (prevState) =>{

            let i;
            let replaceState = [...prevState];

            for(i = 0; i < replaceState.length; i++)
            {
                if(replaceState[i].name == stateName)
                {
                    replaceState[i] = newStateObj;
                }
            }

            console.log(replaceState);
            
            return [
                ...replaceState,

            ];    
            
        })




    }


    useEffect( () => {

        const stateGet = async() =>
        {
            const statesDocs = await getDocs(stateCollection);
            setStates( statesDocs.docs.map(   (doc) => ({...doc.data(), id: doc.id}) ) );
        };

        stateGet();
    }, []);

    const parkGet = async(calledStateName) =>
    {
        console.log(calledStateName);
        if(parks[calledStateName] === undefined)
        {
            const parkCollection = collection(db, 'States/'+ calledStateName + '/Parks');
               
            const park = await getDocs(parkCollection);

            setPark( (prevParks) => {
                const newPark = {[calledStateName]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newParks = {...prevParks, ...newPark};
                console.log(newParks);

                return newParks;
                //return {...prevParks, [calledStateName]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))}
            
            })


        }
        setStateName(calledStateName);


        

    }
    const boardGet = async(calledParkName) =>
    {
        console.log(calledParkName);
        if(boards[calledParkName] === undefined)
        {
            const boardCollection = collection(db, 'States/'+ stateName + '/Parks/' + calledParkName + '/Boards');
               
            const board = await getDocs(boardCollection);

            setBoards( (prevBoards) => {
                const newBoard = {[calledParkName]: board.docs.map( (doc) =>({...doc.data(), id: doc.id}))};
                const newBoards = {...prevBoards, ...newBoard};
                console.log(newBoards);

                return newBoards;
                //return {...prevParks, [calledStateName]: park.docs.map( (doc) =>({...doc.data(), id: doc.id}))}
            
            })


        }
        setParkName(calledParkName);


        

    }




    return (
        <div style={{background: "black"}}>
            <Header></Header>
            <div className='sign_translation_editor_container'>
                <div className='sign_translation_editor__states__container'>
                    <div>
                        <StateFilter></StateFilter>
                    </div>

                    <div>
                    {states.map( (state) => {


                            return (<StateMod toUploadState ={uploadState}  route = './' name={state.id} stateImage = {state.img} onCallState = {parkGet} ></StateMod>)




                        }


                    )}
                    </div>

                </div>
                <div className='sign_translation_editor__parks__container'>
                    <div>
                        <ParkFilter></ParkFilter>
                    </div>
                <div>

                    {parksUnfiltered !== undefined && parksUnfiltered.map( (park) => {

                            return <ParkMod onCallPark = {boardGet} route = './' name={park.id} parkImage = {park.img}  ></ParkMod>




                        }


                    )}
                    </div>
                </div>

                <div className='sign_translation_editor__boards__container'>
                    <div>
                        <BoardFilter></BoardFilter>
                    </div>
                    <div>
                        {boardsUnfiltered !== undefined && boardsUnfiltered.map( (board) => {


                                return <BoardMod route = './' name={board.title} boardImage = {board.img}  ></BoardMod>




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
